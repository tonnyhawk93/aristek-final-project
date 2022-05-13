export const getRootPath = (pathname: string) => {
  return `/${pathname.split("/")[1]}`;
};

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}
