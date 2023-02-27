import { writable, derived } from "svelte/store";
export const count = writable(0);
export const doubleCount = derived(count, (c) => c * 2);