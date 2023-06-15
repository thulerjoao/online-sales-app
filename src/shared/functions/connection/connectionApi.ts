import axios, { AxiosRequestConfig } from 'axios';

import { MethodEnum } from '../../enums/methods.enum';
import { getAuthorizatedToken } from './auth';
import { ERROR_AXIOS_DANIED, ERROR_CONNECTION } from './errosConstants';

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionApi {
  static async call<T, B = unknown>(url: string, method: MethodType, body?: B): Promise<T | undefined> {
    const token = await getAuthorizatedToken();
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token,
        'Contente-Type': 'application/json',
      },
    };
    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url, config)).data;
      case MethodEnum.PATCH:
      case MethodEnum.POST:
      case MethodEnum.PUT:
        return (await axios[method]<T>(url, body, config)).data;
    }
  }

  static async connect<T, B = unknown>(
    url: string,
    method: MethodType,
    body?: B,
  ): Promise<T | undefined> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error(ERROR_AXIOS_DANIED);

          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export const ConnectionApiGet = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.GET);
};

export const ConnectionApiDelete = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.DELETE);
};

export const ConnectionApiPost = async <T, B = unknown>(url: string, body: B): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.POST, body);
};

export const ConnectionApiPut = async <T, B = unknown>(url: string, body: B): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.PUT, body);
};

export const ConnectionApiPatch = async <T, B = unknown>(url: string, body: B): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.PATCH, body);
};
