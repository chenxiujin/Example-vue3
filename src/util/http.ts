import axios from "axios";
import Object from "@/util/object";

const $axios = axios.create({
  // baseURL: "", // url前部分
  timeout: 1000, // 超时1000ms
  withCredentials: false, // 是否可以携带cookie
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

/**
 * 添加请求拦截器
 * @param config类型 {Axios.AxiosRequestConfig}
 * @param error类型 any
 * @returns {number}
 */
$axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 请求错误时做些什么
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器
 * response内含参数
 *   data: T;
 *   status: number;
 *   statusText: string;
 *   headers: AxiosResponseHeaders;
 *   config: AxiosRequestConfig<D>;
 *   request?: any;
 * @param response类型 {Axios.AxiosResponse}
 * @param error类型 any
 * @returns {number}
 */
$axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default class Http {
  /**
   * 通用请求
   * <eg>
   * request({
   *   method: 'post',
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": "json"},
   *   data: {}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async request<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .request<T>(options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * post请求
   * <eg>
   * post({
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": ""},
   *   data: {}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async post<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .post<T>(options.url, options.data, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * get请求
   * <eg>
   *   get({
   *     url: '127.0.0.1:8080/user',
   *     headers: {"Content-type": ""},
   *     params: {}
   *   },
   *   complete: response => console.log(data),
   *   rejected: error => console.log(error),
   *   finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async get<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .get<T>(options.url, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * put请求
   * <eg>
   * put({
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": ""},
   *   data: {}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async put<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .put<T>(options.url, options.data, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * delete请求
   * <eg>
   * delete({
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": ""}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async delete<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .delete<T>(options.url, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * head请求
   * <eg>
   * head({
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": ""}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async head<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .head<T>(options.url, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * options请求
   * <eg>
   * options({
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": ""}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async options<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .options<T>(options.url, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }

  /**
   * patch请求
   * <eg>
   * patch({
   *   url: '127.0.0.1:8080/user',
   *   headers: {"Content-type": ""},
   *   data: {}
   * },
   * complete: response => console.log(data),
   * rejected: error => console.log(error),
   * finished: () => console.log("Finished!"));
   * </eg>
   * @param options 请求参数
   * @param complete 成功时操作
   * @param rejected 被拒绝时操作
   * @param finished 完成时操作
   */
  static async patch<T>(
    options: RequestOptions,
    complete?: (response: T) => void,
    rejected?: (error: unknown) => void,
    finished?: () => void
  ): Promise<void> {
    return $axios
      .patch<T>(options.url, options.data, options)
      .then(response => {
        if (complete !== undefined && Object.isFunction(complete)) {
          complete(response.data);
        }
      })
      .catch(error => {
        if (rejected !== undefined && Object.isFunction(complete)) {
          rejected(error);
        } else {
          return Promise.reject(error);
        }
      })
      .finally(() => {
        if (finished !== undefined && Object.isFunction(complete)) {
          finished();
        }
      });
  }
}

export class RequestOptions {
  // url
  url!: string;
  // 基础url，完整url=baseURL+url
  baseURL?: string;
  // 请求方法
  method?: Method | string;
  // 请求头
  headers?: RequestHeaders;
  // 请求参数
  params?: unknown;
  // 请求body
  data?: unknown;
  // 超时时间，单位ms，0表示无超时时间，默认1000ms
  timeout?: number | 1000;
  // 是否允许使用凭证（传递cookie）
  withCredentials?: boolean | false;
  // 响应类型，默认json
  responseType?: ResponseType | "json";
  // 响应编码类型，默认utf8
  responseEncoding?: ResponseEncoding | string | "utf8";
  // 上传进度
  onUploadProgress?: (progressEvent: unknown) => void;
  // 下载进度
  onDownloadProgress?: (progressEvent: unknown) => void;
  // socket 路径
  socketPath?: string | null;
  // http agent
  httpAgent?: unknown;
  // https agent
  httpsAgent?: unknown;
  // 代理
  proxy?: ProxyConfig | false;
}

export type RequestHeaders = Record<string, string | number | boolean>;

export interface ProxyConfig {
  host: string;
  port: number;
  auth?: {
    username: string;
    password: string;
  };
  protocol?: string;
}

/**
 * 请求方式
 */
export type Method =
  | "get"
  | "GET"
  | "put"
  | "PUT"
  | "post"
  | "POST"
  | "delete"
  | "DELETE"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "options"
  | "OPTIONS"
  | "head"
  | "HEAD"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

/**
 * 响应类型
 */
export type ResponseType = "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";

/**
 * 响应编码
 */
export type ResponseEncoding =
  | "ascii"
  | "ASCII"
  | "ansi"
  | "ANSI"
  | "binary"
  | "BINARY"
  | "base64"
  | "BASE64"
  | "base64url"
  | "BASE64URL"
  | "hex"
  | "HEX"
  | "latin1"
  | "LATIN1"
  | "ucs-2"
  | "UCS-2"
  | "ucs2"
  | "UCS2"
  | "utf-8"
  | "UTF-8"
  | "utf8"
  | "UTF8"
  | "utf16le"
  | "UTF16LE";
