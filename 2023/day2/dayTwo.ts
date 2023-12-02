const fs = require("node:fs");

const data = fs.readFile("data.txt", "utf-8", (err, result) => {
    if (err) {
        throw new Error(err);
    }
    console.log(result)
    // Add logic for the puzzle
})