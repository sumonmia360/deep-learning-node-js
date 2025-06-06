const a = 10;
const c = 20;

const add = () => a + c;

module.exports = { a, add, c };

// console.log(module);

import add from "./esm/file-3.mjs";
console.log(add(555));
