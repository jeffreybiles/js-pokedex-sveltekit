import { writable, type Writable } from "svelte/store";

export const caughtMonsters: Writable<string[]> = writable([]);