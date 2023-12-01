const fs = require("node:fs");

const data = fs.readFile("data.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  if (typeof result === "string") {
    let array = result.split("\n");

    let numberArray = [];
    let arrayD = [];
    array.forEach((str) => {
      const num = str.match(/[0-9]/g)

      let len = num?.length

      //console.log(num?.length, num)

      const n2 = num[0] + num[len - 1]
      arrayD.push(n2)
    });

    console.log(arrayD);

    arrayD.forEach((number) => {
      let number1 = Number(number);
      numberArray.push(number1);
    });

    let total = 0;
    for (const i in numberArray) {
      total += numberArray[i];
    }

    console.log(total);
  }
});
