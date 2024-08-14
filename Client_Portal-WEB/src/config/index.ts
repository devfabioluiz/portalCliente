export default {
  baseURL:
    (import.meta.env.VITE_BASE_URL as string) ||
    'https://client-portal-qa.azurewebsites.net/api/v1',
};
