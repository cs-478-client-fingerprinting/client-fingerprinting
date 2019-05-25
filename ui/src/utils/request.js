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
  switch (url) {
    case "/fingerprint":
      return { exists: true, name: "Daniel" };
    default:
      return {};
  }
};
