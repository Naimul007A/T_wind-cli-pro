#!/usr/bin/env node
import inquirer from "inquirer";
import Laravel from "./ProjectBaseSystem/laravel.js";
import Vue from "./ProjectBaseSystem/Vue.js";
import { getProjectTypeWithAI } from "./utils/utils.js";
async function askQuestion() {
  try {
    const { projectType } = await inquirer.prompt([
      {
        type: "list",
        name: "projectType",
        message: "What kind of project do you want to create?",
        choices: ["laravel", "inertia.js", "vue.js"],
        default: getProjectTypeWithAI("./package.json"),
      },
    ]);
    switch (projectType) {
      case "laravel":
        ForReact();
        break;
      case "inertia.js":
        ForReact();
        break;
      case "vue.js":
        ForReact();
        break;
      default:
        console.log("Please select a valid option");
    }
  } catch (error) {
    console.log(error);
  }
}
askQuestion();