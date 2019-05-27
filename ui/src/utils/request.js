// export const request = async (url, options) => {
//   try {
//     const res = await fetch(url, options);
//     return await res.json();
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// };

// Mock requests

import { sleep } from "./sleep";
export const request = async (url, options) => {
  await sleep(500);
  switch ([options.method, url].join(" ")) {
    case "POST /fingerprint":
      return {
        uniqueness: uniquenessMock
      };
    case "DELETE /fingerprint":
      return { success: "Success" };
    case "POST /fingerprint/check":
      return {
        exists: true,
        name: "Daniel",
        uniqueness: uniquenessMock
      };
    default:
      return {};
  }
};

const uniquenessMock = {
  userAgent: 50,
  webdriver: 50,
  language: 50,
  colorDepth: 50,
  deviceMemory: 50,
  pixelRatio: 50,
  hardwareConcurrency: 50,
  screenResolution: 50,
  availableScreenResolution: 50,
  timezoneOffset: 50,
  timezone: 50,
  sessionStorage: 50,
  localStorage: 50,
  indexedDb: 50,
  addBehavior: 50,
  openDatabase: 50,
  cpuClass: 50,
  platform: 50,
  doNotTrack: 50,
  plugins: 50,
  canvas: 50,
  webglVendorAndRenderer: 50,
  adBlock: 50,
  hasLiedLanguages: 50,
  hasLiedResolution: 50,
  hasLiedOs: 50,
  hasLiedBrowser: 50,
  touchSupport: 50,
  fonts: 50,
  fontsFlash: 50,
  audio: 50,
  enumerateDevices: 50
};
