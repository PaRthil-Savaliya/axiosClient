import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

interface AxiosClientOptions {
  baseURL: string;
  whitelistUrls?: string[];
  blacklistUrls?: string[];
  token?: string;
}

export const createCustomAxiosClient = (options: AxiosClientOptions) => {
  const axiosClient = axios.create({
    baseURL: options.baseURL,
  });

  const { whitelistUrls = [], blacklistUrls = [], token } = options;

  axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    try {
      if (token && !blacklistUrls.includes(config.url || "")) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      }

      if (
        !whitelistUrls.includes(config.url || "") &&
        ["post", "patch", "put"].includes(config.method || "")
      ) {
        config.headers = {
          ...config.headers,
          "Content-Type": "application/json",
          Accept: "application/json",
        } as AxiosRequestHeaders;
      } else {
        config.headers = {
          ...config.headers,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        } as AxiosRequestHeaders;
      }
    } catch (e) {
      console.error({ e });
    }

    console.log("AAA config", config);
    return config;
  });

  return axiosClient;
};
