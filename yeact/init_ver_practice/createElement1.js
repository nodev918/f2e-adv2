// let Yeact = {
//   createElement,
//   render,
// };

// let createElement = function (type, props, ...child) {
//   let element = document.createElement(type);
//   element.setAttribute(props);

//   return;
// };

// let render = function (dom, parent) {
//   parent.appendChild(dom);
// };

let Yeact = {
  createElement,
  render,
};

function createElement(type, props) {
  let dom = document.createElement(type);
  dom.innerText = "hello";
  dom.setAttribute("style", "color:red");
  return dom;
}

function render(dom) {
  document.getElementById("root").appendChild(dom);
}

Yeact.render(Yeact.createElement("div", "hi"), document.getElementById("root"));
