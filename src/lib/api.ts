import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const createRequest = async <T extends object, R extends object>(
  method: "get" | "post" | "patch" | "delete",
  path: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<R>> => {
  try {
    const response = await api.request<R>({
      method,
      url: path,
      data,
      ...config,
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
