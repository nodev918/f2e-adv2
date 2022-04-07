const Yeact = {
  createElement: new Proxy(
    {},
    {
      get(target, property, receiver) {
        return (children, attrs) => {
          const el = document.createElement(property);
          for (let attr in attrs) {
            el.setAttribute(attr, attrs[attr]);
          }
          for (let child of Array.isArray(children) ? children : [children]) {
            el.appendChild(
              typeof child === "string" ? document.createTextNode(child) : child
            );
          }
          return el;
        };
      },
    }
  ),
  render: (el, root) => {
    root.appendChild(el);
  },
};
