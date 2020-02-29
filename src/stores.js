import { writable } from 'svelte/store';

export const memoryCount = writable(1);
export const cpuCount = writable(1);
export const storageCount = writable(1);
export const networkCount = writable(0);
export const haikuCount = writable(0);
export const cryptoCount = writable(0);
export const isCryptoEnabled = writable(false);