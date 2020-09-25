/**
 * Returns source with passed keys only
 */
const pick = <T, K extends keyof T>(source: T, ...keys: K[]): Pick<T, K> => {
  const result: any = {};

  for (const key in keys) {
    result[key] = source[key];
  }

  return result;
};

/**
 * Returns source without passed keys
 */
const omit = <T, K extends keyof T>(source: T, ...keys: K[]): Omit<T, K> => {
  const result: any = {};

  for (const key of Object.keys(source).filter(item =>
    keys.every(one => one != item)
  )) {
    result[key] = source[key];
  }

  return result;
};

export { pick, omit };
