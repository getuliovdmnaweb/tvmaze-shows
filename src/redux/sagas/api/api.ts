import axios, { AxiosRequestConfig } from "axios";

export const api = (() => {
  return {
    get: async (url: string, params?: AxiosRequestConfig) => {
      const response = await axios.get(url, {
        params: {
          ...params?.params,
        },
      });
      return response.data;
    },
  };
})();
