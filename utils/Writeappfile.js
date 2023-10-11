import fs from "fs";

import TailwindDirectives from "./tailwindDirectives.js";

import chalk from "chalk";

const WriteAppFile = (msg = "index.css not found!\n Creating index.css") => {
  fs.writeFile("resources/css/app.css", TailwindDirectives, function (err) {
    if (err) throw err;
    console.log(chalk.green(msg));
  });
};

export default WriteAppFile;
