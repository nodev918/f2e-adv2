const Yeact = {
  createElement,
  render,
};

function createElement(type, props, ...children) {
  return {
    type: type,
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
  return dom;
}

// Yeact.render(
//   Yeact.createElement(
//     "div",
//     { id: "flag", style: "color:red" },
//     "First Line",
//     Yeact.createElement(
//       "div",
//       { style: "color:blue" },
//       "Second Line",
//       Yeact.createElement("div", { style: "color:green" }, "Third Line")
//     )
//   ),
//   document.getElementById("root")
// );

const element = (
  <div id="line">
    First Line
    <div class="line 2" style="color:red">
      Second Line
      <div style="font-size:30px;color:blue">Third Line</div>
    </div>
  </div>
);
const root = document.getElementById("root");

Yeact.render(element, root);
