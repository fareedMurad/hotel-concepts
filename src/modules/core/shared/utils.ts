/**
 * Download blob as file
 */
const downloadBlob = (blob: Blob, name: string) => {
  const link = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    fileName: name,
    download: name
  });
  link.click();
};

const createFilter = filter => source =>
  Object.keys(source)
    .filter(filter)
    .reduce((result, key) => {
      result[key] = source[key];
      return result;
    }, {} as any);

const exclude = <T, R = string, K extends keyof T = keyof T>(
  source: T,
  ...fields: K[]
): Partial<T> => createFilter(key => !fields.includes(key as K))(source);

/**
 * Assign existing properties only
 */
const assign = (target, source) =>
  Object.keys(source).forEach(function(key) {
    if (key in target) {
      // or target.hasOwnProperty(key)
      target[key] = source[key];
    }
  });

export { downloadBlob, exclude, assign };
