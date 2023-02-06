import { atom } from "recoil";

export const todoState = atom({
  key: "todos",
  default: {
    to_do: ["밥먹기", "똥싸기", "잠자기", "공부하기"],
    doing: [],
    done: [],
  },
});
