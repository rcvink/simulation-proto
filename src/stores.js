import { haikus } from './haikus.json';
import { writable, readable, derived } from 'svelte/store';

export const memoryCount = writable(1);
export const cpuCount = writable(1);
export const storageCount = writable(100);
export const networkCount = writable(0);
export const haikuCount = writable(0);
export const cryptoCount = writable(1000);
export const isCryptoEnabled = writable(false);
export const allHaikus = readable(haikus);
export const haikuTime = derived(
    [memoryCount, cpuCount, haikuCount],
    ([$memoryCount, $cpuCount, $haikuCount]) => 
        1000 * Math.pow($haikuCount, $haikuCount) / ($memoryCount * $cpuCount)
);