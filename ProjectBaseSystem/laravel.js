import fs from 'fs/promises';

import Chalk from 'chalk';

import shell from 'shelljs';

import checkSrcFolder from '../middleware/checkSrcFolder.js';

let laraveltailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;
import TailwindDirectives from '../utils/tailwindDirectives.js';
import getPackageManager from '../utils/getPackageManager.js';

const Laravel = async () => {
  console.log(Chalk.blue('Installing tailwindcss...'));

  const pm = getPackageManager();

  const installCMD = pm === 'npm' ? 'install' : 'add';

  shell.exec(`${pm} ${installCMD} -D tailwindcss postcss autoprefixer`);

  shell.exec('npx tailwindcss init -p');

  await fs.writeFile('./tailwind.config.js', laraveltailwindConfig);

  await fs.writeFile(
    'resources/css/app.css',
    TailwindDirectives,
    function (err) {
      if (err) throw err;
      console.log(Chalk.green('Tawilind directives added to app.css'));
    },
  );
  console.log(Chalk.green('Tailwindcss installed successfully!'));
  console.log(Chalk.blue('Thank you for using tailwind-cli-tool!'));
};

export default Laravel;
