import UAParser from "ua-parser-js";

const uaParser = new UAParser();

const systemInfo: SystemInfo = {
  os: uaParser.getOS(),
  device: uaParser.getDevice(),
  client: uaParser.getBrowser(),
  userAgent: uaParser.getUA()
};

const config = {
  BASE_URL: import.meta.env.VITE_BASE_URL || "",
  NODE_ENV: import.meta.env.VITE_NODE_ENV || "",
  APPLICATION_KEY: import.meta.env.VITE_APPLICATION_KEY || "",
  SYSTEM: systemInfo
};

export interface SystemInfo {
  os: IOS;
  device: IDevice;
  client: IClient;
  userAgent: string | undefined;
}

interface IOS {
  /**
   * 操作系统名称
   * AIX, Amiga OS, Android, Arch, Bada, BeOS, BlackBerry, CentOS, Chromium OS, Contiki,
   * Fedora, Firefox OS, FreeBSD, Debian, DragonFly, Gentoo, GNU, Haiku, Hurd, iOS,
   * Joli, Linpus, Linux, Mac OS, Mageia, Mandriva, MeeGo, Minix, Mint, Morph OS, NetBSD,
   * Nintendo, OpenBSD, OpenVMS, OS/2, Palm, PCLinuxOS, Plan9, Playstation, QNX, RedHat,
   * RIM Tablet OS, RISC OS, Sailfish, Series40, Slackware, Solaris, SUSE, Symbian, Tizen,
   * Ubuntu, UNIX, VectorLinux, WebOS, Windows [Phone/Mobile], Zenwalk
   */
  name: string | undefined;
  version: string | undefined;
}

interface IDevice {
  /**
   * 设备型号
   */
  model: string | undefined;
  /**
   * 设备类型
   * 手机 mobile, 平板电脑 tablet, 智能电视 smarttv, 穿戴设备 wearable, 嵌入式设备 embedded
   */
  type: string | undefined;
  /**
   * 设备厂商
   * Acer, Alcatel, Amazon, Apple, Archos, Asus, BenQ, BlackBerry, Dell, GeeksPhone,
   * Google, HP, HTC, Huawei, Jolla, Lenovo, LG, Meizu, Microsoft, Motorola, Nexian,
   * Nintendo, Nokia, Nvidia, Ouya, Palm, Panasonic, Polytron, RIM, Samsung, Sharp,
   * Siemens, Sony-Ericsson, Sprint, Xbox, ZTE
   */
  vendor: string | undefined;
}

interface IClient {
  /**
   * 客户端名称
   * Amaya, Android Browser, Arora, Avant, Baidu, Blazer, Bolt, Camino, Chimera, Chrome,
   * Chromium, Comodo Dragon, Conkeror, Dillo, Dolphin, Doris, Edge, Epiphany, Fennec,
   * Firebird, Firefox, Flock, GoBrowser, iCab, ICE Browser, IceApe, IceCat, IceDragon,
   * Iceweasel, IE [Mobile], Iron, Jasmine, K-Meleon, Konqueror, Kindle, Links,
   * Lunascape, Lynx, Maemo, Maxthon, Midori, Minimo, MIUI Browser, [Mobile] Safari,
   * Mosaic, Mozilla, Netfront, Netscape, NetSurf, Nokia, OmniWeb, Opera [Mini/Mobi/Tablet],
   * Phoenix, Polaris, QQBrowser, RockMelt, Silk, Skyfire, SeaMonkey, SlimBrowser, Swiftfox,
   * Tizen, UCBrowser, Vivaldi, w3m, Yandex
   */
  name: string | undefined;
  version: string | undefined;
}

export default config;
