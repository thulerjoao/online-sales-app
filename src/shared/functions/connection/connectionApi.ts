import axios, { AxiosRequestConfig } from 'axios';

import { MethodEnum } from '../../enums/methods.enum';
import { getAuthorizatedToken } from './auth';

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionApi {
  static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T | undefined> {
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

  static async connect<T>(url: string, method: MethodType, body?: unknown): Promise<T | undefined> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.stauts) {
          case 401:
          case 403:
            throw new error('Sem permissão');

          default:
            throw new error('Sem conexão com a API');
        }
      }
      throw new error('Sem conexão com a API');
    });
  }
}

export const ConnectionApiGet = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.GET);
};

export const ConnectionApiDelete = async <T>(url: string): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.DELETE);
};

export const ConnectionApiPost = async <T>(url: string, body: unknown): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.POST, body);
};

export const ConnectionApiPut = async <T>(url: string, body: unknown): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.PUT, body);
};

export const ConnectionApiPatch = async <T>(url: string, body: unknown): Promise<T | undefined> => {
  return ConnectionApi.connect(url, MethodEnum.PATCH, body);
};
