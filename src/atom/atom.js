import { atom } from "recoil";

export const orderAtom = atom({
  key: "orderAtom",
  default: true,
});

export const postAtom = atom({
  key: "postAtom",
  default: [],
});
