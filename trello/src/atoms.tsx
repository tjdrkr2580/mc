import { atom } from "recoil";

interface IToDoState {
  [key: string]: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
}

export const todoState = atom<IToDoState>({
  key: "todos",
  default: {
    to_do: [],
    doing: [],
    done: [],
  },
});
