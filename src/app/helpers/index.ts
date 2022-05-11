export const getToken = () => {
  return localStorage.getItem("fakeToken");
};

export const setToken = (token: string) => {
  return localStorage.setItem("fakeToken", token);
};

export const removeToken = () => {
  return localStorage.removeItem("fakeToken");
};

export const getRootPath = (pathname: string) => {
  return `/${pathname.split("/")[1]}`;
};
