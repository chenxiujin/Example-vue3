export class BaseRequest<T> {
  constructor(data: T) {
    this.data = data;
  }
  data: T;
}

export class BaseResponse<T> {
  constructor(data: T, code: string, message: string) {
    this.data = data;
    this.code = code;
    this.message = message;
  }
  data: T;
  code: string;
  message: string;
}
