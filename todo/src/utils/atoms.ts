import { atom } from "recoil";
import { TodoType } from "../types/type";

export const darkmodeState = atom<Boolean>({
  key: "darkmode",
  default: false,
});

export const todoState = atom({
  key: "todo",
  default: [],
});
