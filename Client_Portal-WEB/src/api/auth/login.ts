import { useNavigate } from 'react-router-dom';

import { type UseMutationResult, useMutation } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { useRecoilState } from 'recoil';

import { apiClient, saveTokens } from 'src/api';
import { type ApiError } from 'src/api/common/common.types';
import { TOKEN_REFRESH_URL } from 'src/api/constants';
import { type UserType } from 'src/api/shared/User.types';
import { useNotification } from 'src/hooks';
import { userAtom } from 'src/recoil/user';
import { LocalStorageKeys, getItem } from 'src/services/localStorage.service';

export interface IMyProfileResponse {
  data: UserType;
}

export interface ILoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

interface ILoginParams {
  email: string;
  password: string;
}

const getMyUserProfile = async (): Promise<IMyProfileResponse> =>
  await apiClient.get('/auth/me');

const login = async ({
  email,
  password,
}: ILoginParams): Promise<ILoginResponse> =>
  await apiClient.post('/auth/login', {
    email,
    password,
  });

export const useLogin = (): UseMutationResult<
  ILoginResponse,
  unknown,
  ILoginParams,
  unknown
> => {
  const navigate = useNavigate();
  const { addNotification } = useNotification();
  const [, setUser] = useRecoilState(userAtom);

  return useMutation(login, {
    onSuccess: async ({ data }) => {
      saveTokens(data.accessToken, data.refreshToken);

      const myProfile = await getMyUserProfile();
      setUser(myProfile.data);
      navigate('/opportunities');
    },
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError<ApiError, ApiError>(error))
        addNotification({
          type: 'error',
          message: error.message ?? 'Something went wrong',
        });
    },
  });
};

export const refreshToken = async (): Promise<ILoginResponse> => {
  const token = getItem(LocalStorageKeys.refreshToken);

  return await apiClient.post(TOKEN_REFRESH_URL, {
    refreshToken: token,
  });
};
