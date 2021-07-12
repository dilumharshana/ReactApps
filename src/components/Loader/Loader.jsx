import React from "react";
import { compose, pipe } from "lodash/fp";

const trim = (str) => str.trim();
const touppercase = (str) => str.toUpperCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const person = { name: "dilum", age: { number: 23 } };
const man = { ...person, age: { number: 22 } };

console.log(person);
console.log(man);

export const Button = document.write(<p>hello</p>);
