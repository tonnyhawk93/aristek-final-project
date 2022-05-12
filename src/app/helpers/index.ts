export const getRootPath = (pathname: string) => {
  return `/${pathname.split("/")[1]}`;
};
