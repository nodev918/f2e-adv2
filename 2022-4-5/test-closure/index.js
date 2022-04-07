// var counter = (function () {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1

function useState(x) {
  let data = x;
  function setData(y) {
    return (data += y);
  }
  function getData() {
    return data;
  }
  return [getData, setData];
}

let [counter, addCount] = useState(0);
addCount(1);
console.log(counter());
addCount(2);
console.log(counter());
addCount(3);
console.log(counter());
