let input = document.querySelector("#input");

let show = document.querySelector("#render");
console.log(typeof input);

input.onchange = function (e) {
  let render_value = e.target.value;
  e.target.value = "";
  sayHi();
  render(render_value, show);
};

function sayHi() {
  console.log("hi");
}

function render(render_value, show) {
  const textObj = document.createElement("div");
  textObj.innerText = render_value;
  show.appendChild(textObj);
}
