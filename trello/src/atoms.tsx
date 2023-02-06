import { atom } from "recoil";

export const todoState = atom({
  key: "todos",
  default: ["밥먹기", "똥싸기", "잠자기", "공부하기"],
});
