/**
 * Capitalize each word in string
 */
const capitalize = (source: string) =>
  source
    ?.split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.substring(1))
    .join(' ');

/**
 * format size
 */
function fileSize(bytes, dp = 1) {
  const thresh = 1000;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + ' ' + units[u];
}

enum LocaleToCurrency {
  'en-US' = 'USD',
  es = 'EUR'
}

const parsePrice = (locale: string, price: any) =>
  `${price[LocaleToCurrency[locale]]} ${LocaleToCurrency[locale]}`;

/**
 * Parse String to Object
 */
const parseString = (source: string) => JSON.parse(JSON.stringify(source));

export { capitalize, fileSize, parseString, parsePrice };
