import {registerFont, unregisterFont} from '../src/api.js';
import fs from 'node:fs';

export function registerFontAsset(filename: string) {
  const path = new URL(filename, import.meta.url);
  const array = fs.readFileSync(path).buffer;
  registerFont(array, path);
}

export function unregisterFontAsset(filename: string) {
  const path = new URL(filename, import.meta.url);
  unregisterFont(path);
}
