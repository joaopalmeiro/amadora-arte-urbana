import data from './data.json';

// Source: https://github.com/rebassjs/rebass/blob/v4.0.7/packages/preset/src/index.js#L14
// export const defaultFontFamily = 'system-ui, sans-serif';

export const packetSize = 5;
export const numStickers = data.length;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals
// https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/words.ts#L58
export const msInDay = 86_400_000;
