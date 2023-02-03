import { TodoType } from "./../types/type";
import { atom } from "recoil";

export const darkmodeState = atom<Boolean>({
  key: "darkmode",
  default: false,
});

export const todoState = atom<TodoType[]>({
  key: "todo",
  default: [],
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
