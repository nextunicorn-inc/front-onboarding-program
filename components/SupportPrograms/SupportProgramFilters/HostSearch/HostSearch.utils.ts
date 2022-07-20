const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

export const base64Id = () => {
  let str = '';
  // WHAT THE HACK THIS LINT RULES
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 22; i++) {
    str += base64Chars.charAt(Math.floor(Math.random() * 64));
  }
  return str;
};

const possiblyDangerousCharacters = '$()*+.?[\\]^{}|';
export const pureSearchValue = (word: string) =>
  [...word].filter((v) => !possiblyDangerousCharacters.includes(v)).join('');
