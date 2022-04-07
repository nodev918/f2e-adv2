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
