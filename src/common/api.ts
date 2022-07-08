import config from "@/config";

export default abstract class BaseApi {
  protected constructor(subUrl: string) {
    this.baseUrl = this.getBaseUrl(subUrl);
  }

  baseUrl: string;

  /**
   * 获取api基础url
   * @returns {string} api基础url
   */
  private getBaseUrl(subUrl: string): string {
    let baseUrl = config.BASE_URL;
    baseUrl = baseUrl.endsWith("/") ? baseUrl.substring(0, baseUrl.length - 1) : baseUrl;
    subUrl = subUrl.startsWith("/") ? subUrl : "/" + subUrl;
    return baseUrl + (subUrl.endsWith("/") ? subUrl.substring(0, subUrl.length - 1) : subUrl);
  }

  protected getUrl(nextUrl: string): string {
    nextUrl = nextUrl.startsWith("/") ? nextUrl : "/" + nextUrl;
    return this.baseUrl + (nextUrl.endsWith("/") ? nextUrl.substring(0, nextUrl.length - 1) : nextUrl);
  }
}
