(x=>x+1)(1)

((x)=>{return x+1})(3)

(x=>x+1)((x=>x+1)(3))


f = x=>x+2
((x,y)=>x(1)+y+1)(f,4)


f1 = x=>x+1
f2 = y=>y+10
f3 = z=>z+100
f4 = k=>k-500

function loop(n, ...other){
    let box = n
    other.forEach(f=>{
        box = f(box)
    })
    return box
}


const result = loop(1,f1,f2,f3,f4)
console.log(result)








function com(init){
    let counter = init

    function addOne(addon){
        counter += addon
    }

    return [counter,addOne]
    
}

const [data,addOne] = com(0)
addOne(1)
console.log(data)
addOne(1)
console.log(data)



console.log( component(1) )




function component(){
    let vara = 1
    let varb = 2

    return (vara+varb)
}









function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12



function useState(x){
    let data = x
    function setData(y){
    
        return data += y
    }
    function getData(){
        return data
    }
    return ([getData,setData])
}

let [counter,addCount] = useState(0)
addCount()
console.log(counter())
addCount()
console.log(counter())
addCount()
console.log(counter())
// console.log(addCount())
// console.log(addCount())
// console.log(addCount())



var counter1 = (
    function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter1.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter1.value()); // logs 2
counter.decrement();
console.log(counter1.value()); // logs 1



