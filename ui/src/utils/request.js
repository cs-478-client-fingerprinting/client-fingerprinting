export const request = async (url, options) => {
  const res = await fetch(url, options);
  return await res.json();
};
