#!/usr/bin/env node

// External Imports
import chalk from "chalk";
import inquirer from "inquirer";

// Internal Imports
import { getDBInput, getLangInput, getPath } from "./src/config/inputs.js";
import { Cli } from "./src/commands/main.js";
import { logger } from "./src/logger.js";

// Global Variables
let projectName = "";
let db = "";
let lang = "";

// Prompt Functions
const askProjectName = async () => {
  const { project_name } = await inquirer.prompt({
    name: "project_name",
    type: "input",
    message: "What is your project name?",
    default: "express-app",
  });
  projectName = project_name;
};

const askDBOptions = async () => {
  const { db_options } = await inquirer.prompt({
    name: "db_options",
    type: "list",
    message: "Which database would you like to use?",
    choices: ["MongoDB", "PostgreSQL", "Others"],
  });
  db = db_options;
};

const askLanguage = async () => {
  const { lang_options } = await inquirer.prompt({
    name: "lang_options",
    type: "list",
    message: "Which programming language would you like to use?",
    choices: ["JavaScript", "TypeScript (Recommended)"],
  });
  lang = lang_options;
};

// Main Function
const initializeProject = async () => {
  try {
    // Step-by-Step Prompts
    await askProjectName();
    await askLanguage();
    if (lang) await askDBOptions();

    // Final Actions
    await finalizeSetup();
  } catch (error) {
    logger.warning(`An error occurred: ${error.message}`);
    process.exit(1);
  }
};

// Finalization
const finalizeSetup = async () => {
  if (!projectName || !lang || !db) {
    logger.warning("Missing required inputs. Please try again.");
    process.exit(1);
  }

  await getPath(projectName);

  await getDBInput(db, projectName, lang);
  await getLangInput(lang, projectName, db);

  logger.success(chalk.green(`Project "${projectName}" created successfully!`));
  const name = projectName !== "./" ? projectName : "";
  console.log(`
    ${chalk.whiteBright("Run the following")}
    Commands:
      ${chalk.greenBright(
        name && `cd ${projectName} && `
      )}npm install    To install dependencies
      ${chalk.greenBright(
        name && `cd ${projectName} && `
      )}npm start    To start development server
  `);
};

// Start CLI
await Cli(initializeProject);
