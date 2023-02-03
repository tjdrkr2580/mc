import { TodoType } from "./../types/type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const darkmodeState = atom<Boolean>({
  key: "darkmode",
  default: false,
});

export const todoState = atom<TodoType[]>({
  key: "todo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const todoInput = atom<TodoType>({
  key: "todoInput",
  default: {
    title: "",
    description: "",
  },
});

export const toggleTodo = atom<boolean>({
  key: "toggleTodo",
  default: false,
});
