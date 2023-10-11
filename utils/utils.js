import * as fs from "fs";

export const readJSON = (path) => {
  try {
    const file = fs.readFileSync(path, "utf-8");

    return JSON.parse(file);
  } catch {
    return {};
  }
};

export const getProjectTypeWithAI = (path) => {
  const data = readJSON(path);

  if (data?.dependencies?.vue) {
    return "vue.js";
  } else if (data?.dependencies?.inertia) {
    return "inertia.js";
  }

  return "laravel";
};
