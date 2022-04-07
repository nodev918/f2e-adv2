let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const iter = rl.question("你叫什麼？", function (answer) {
  console.log("名字是：", answer);
  // 不加close，則不會結束
  //   rl.close();
});

rl.on("close", function () {
  // 結束程式
  process.exit(0);
});
