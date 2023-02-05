import React from "react";

//Intersection Types 두개의 타입을 합치는 것 같음 <어떻게 보면 조건이지>

type PROFILE = {
  age: string;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: "21",
  city: "Incheon",
  username: "dd1d1",
  password: "dawdaw",
};

//Union Types 이거 아니면 이거인듯. 말 그대로 OR 연산자

let value: boolean | number;
value = true;
value = 10;
value = "value";

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello", true];

//Literal Types 유니온에 확장판인데 해당 값이 아니라면 오류를 띄우는 것 같음.

let name: "Yohan" | "Taehyun" | "Suhyun";
name = "Taehyun";
name = "Daemin";

//typeof 타입을 복사함.

let animal = { cat: "nyangil" };
let animal_two: typeof animal = { cat: "soonduk" };

//enum 약간 오류 방지의 Literal Types 같음
const enum PC {
  MAC,
  WINDOWS,
  LINUX,
}

interface DD {
  id: number;
  OS: PC;
}

const PC1: DD = {
  id: 1,
  OS: PC.MAC,
};

function App() {
  return <div></div>;
}

export default App;
