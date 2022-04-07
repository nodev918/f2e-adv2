// let Yeact = {
//   createElement,
//   render,
// };

// function createElement(type, props) {
//   let dom = document.createElement(type);
//   dom.innerText = "hello";
//   dom.setAttribute("style", "color:red");
//   return dom;
// }

// function render(dom) {
//   document.getElementById("root").appendChild(dom);
// }

// Yeact.render(Yeact.createElement("div", "hi"), document.getElementById("root"));

let Yeact = {
  createElement,
  render,
};

function createElement(type, props) {
  return {
    type,
    props: {
      ...props,
    },
  };
}

function render(element, container) {
  let dom = document.createElement(element.type);
  dom.innerText = "hello___";

  Object.keys(element.props).forEach((name) => {
    dom[name] = element.props[name];
  });

  container.appendChild(dom);
}

Yeact.render(
  Yeact.createElement("div", { id: "kkk", style: "color:red" }),
  document.getElementById("root")
);
