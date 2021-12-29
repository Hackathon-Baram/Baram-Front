import { atom } from "recoil";

export const orderAtom = atom({
  key: "orderAtom",
  default: false,
});

export const addPostContent = atom({
  key: "addPostContent",
  default: '',
});
