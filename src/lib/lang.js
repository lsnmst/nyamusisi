import { writable } from "svelte/store";

const saved = localStorage.getItem("lang");
export const lang = writable(saved || "fr"); // usa saved se presente

export function setLang(l) {
    lang.set(l);
    localStorage.setItem("lang", l);
}