import { haikus } from './haikus.json';
import { writable, readable } from 'svelte/store';

export const memoryCount = writable(1);
export const cpuCount = writable(1);
export const storageCount = writable(1);
export const networkCount = writable(0);
export const haikuCount = writable(0);
export const cryptoCount = writable(0);
export const isCryptoEnabled = writable(false);
export const allHaikus = readable(haikus);