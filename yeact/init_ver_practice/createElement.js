let Yeact = {
  createElement,
  render,
};

let createElement = function (type, props, ...child) {
  let element = document.createElement(type);
  element.setAttribute(props);

  return;
};

let render = function (dom, parent) {
  parent.appendChild(dom);
};

// let c = document.querySelector("#test");
// console.log(c);
