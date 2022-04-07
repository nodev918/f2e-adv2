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

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}

Yeact.render(
  Yeact.createElement(
    "div",
    { id: "test", style: "color:red" },
    "Hello World",
    Yeact.createElement(
      "div",
      { style: "color:blue" },
      "Second Line",
      Yeact.createElement("div", { style: "color:green" }, "third line")
    )
  ),
  document.getElementById("root")
);
