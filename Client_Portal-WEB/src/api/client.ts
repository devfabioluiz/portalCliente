import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

import { refreshToken } from 'src/api';
import { TOKEN_REFRESH_URL } from 'src/api/constants';
import config from 'src/config';
import {
  LocalStorageKeys,
  removeItem,
  saveItem,
} from 'src/services/localStorage.service';

interface IErrorConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const apiClient = axios.create({
  baseURL: config.baseURL,
});

const sleepRequest = async (
  milliseconds: number,
  originalRequest: IErrorConfig,
): Promise<AxiosResponse> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(apiClient(originalRequest));
    }, milliseconds);
  });
};

export const saveTokens = (accessToken: string, refreshToken: string): void => {
  saveItem(LocalStorageKeys.authToken, accessToken);
  saveItem(LocalStorageKeys.refreshToken, refreshToken);
};

apiClient.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem(LocalStorageKeys.authToken);
    if (authToken != null && config.headers) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  async (error) => await Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: IErrorConfig | undefined = error.config;
    const { response } = error;

    // Prevent infinite token refresh calls (see CP-5060)
    if (
      !response ||
      (response.status === 401 && originalRequest?.url === TOKEN_REFRESH_URL)
    ) {
      return await Promise.reject(error);
    }

    if (
      response?.status === 401 &&
      originalRequest &&
      !originalRequest?._retry
    ) {
      try {
        originalRequest._retry = true;

        const response = await refreshToken();

        saveItem(LocalStorageKeys.authToken, response.data.accessToken);
        saveItem(LocalStorageKeys.refreshToken, response.data.refreshToken);

        // Delay the retry by 1 second
        return await sleepRequest(1000, originalRequest);
      } catch (e) {
        removeItem(LocalStorageKeys.authToken);
        removeItem(LocalStorageKeys.refreshToken);

        if (originalRequest.url !== '/auth/login')
          window.location.href = window.location.origin;

        return await Promise.reject(e);
      }
    }

    return await Promise.reject(error);
  },
);

export const resetTokens = (): void => {
  removeItem(LocalStorageKeys.authToken);
  removeItem(LocalStorageKeys.refreshToken);
};
