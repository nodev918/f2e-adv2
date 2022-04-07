const str = "hello";
console.log(typeof str);
// str.forEach((element) => {
//   console.log(element);
// });

const arr = Array.from(str);
console.log(typeof arr);
arr.forEach((element) => {
  console.log(element);
});

Array.prototype.