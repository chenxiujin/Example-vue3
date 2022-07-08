import Http from "@/util/http";
import { BaseResponse } from "@/common/data";
import BaseApi from "@/common/api";

export default class AuthApi extends BaseApi {
  constructor() {
    super("auth");
  }

  /**
   * 获取应用公钥
   * @returns {string} 应用公钥
   */
  public async getPublicKey(): Promise<string> {
    let publicKey = "";
    await Http.get<GetPublicKeyResponse>(
      {
        url: this.getUrl("get-public-key")
      },
      response => {
        publicKey = response.data.publicKey;
      }
    );
    return publicKey;
  }

  /**
   * 登录
   * @param secretKey 密钥
   * @param data 数据
   */
  public signIn(secretKey: string, data: string): void {
    Http.post(
      {
        url: this.getUrl("sign-in"),
        headers: { Confidential: secretKey },
        data: JSON.stringify({ data: data })
      },
      response => console.log(response)
    );
  }
}

class GetPublicKeyResponse extends BaseResponse<GetPublicKeyData> {
  constructor(data: GetPublicKeyData, code: string, message: string) {
    super(data, code, message);
  }
}

interface GetPublicKeyData {
  publicKey: string;
}
