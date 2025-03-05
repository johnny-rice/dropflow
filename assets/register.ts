import {fonts, FontFace, createFaceFromTables} from '../src/api.js';

const registration = new Map<string, FontFace>();

export function registerFontAsset(filename: string) {
  if (!registration.has(filename)) {
    const url = new URL(filename, import.meta.url)
    const face = createFaceFromTables(url);
    if (face instanceof Promise) throw new Error('How did this happen?');
    fonts.add(face);
    registration.set(filename, face);
  }
}

export function unregisterFontAsset(filename: string) {
  const face = registration.get(filename);
  if (face) fonts.delete(face);
  registration.delete(filename);
}
