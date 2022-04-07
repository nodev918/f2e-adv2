let a = "hello";
let b = "world";
let c = 123;

const obj = {
  a,
  b,
  c,
};

// console.log(obj);

function test(props) {
  return {
    props: {
      ...props,
    },
  };
}

const t = test({ id: "test", style: "color:red" });

// console.log(Object.keys(t.props));
