import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const todoState = atom<IToDoState>({
  key: "todos",
  default: {
    to_do: ["밥먹기", "똥싸기", "잠자기", "공부하기"],
    doing: ["안녕"],
    done: ["밥묵자"],
  },
});
