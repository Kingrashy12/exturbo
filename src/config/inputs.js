import chalk from "chalk";
import { createFile, createPath } from "../utils/index.js";
import {
  dbConfig,
  envFile,
  folders,
  gitignore,
  mainFile,
  nodemonFile,
  tsconfigFile,
} from "./files.js";
import { exConfig } from "./config.ex.js";
import { logger } from "../logger.js";
import { createFileAsync, createFileOnLang } from "../utils/func.js";
import { pkgFiles } from "./files/pkg.js";

/** Creates the package.json file based on language and database configuration. */
const createPkgFile = async (name, lang, db, project_name) => {
  const isMongo = db === exConfig.db[0];
  const isPostgres = db === exConfig.db[1];

  if (isMongo) {
    switch (lang) {
      case "JavaScript":
        return createFile(
          `${name}/package.json`,
          pkgFiles({ main: "js", name: project_name }).mongo
        );
      case "TypeScript":
        return createFile(
          `${name}/package.json`,
          pkgFiles({ main: "ts", name: project_name }).mongoTs
        );
    }
  } else if (isPostgres) {
    switch (lang) {
      case "JavaScript":
        return createFile(
          `${name}/package.json`,
          pkgFiles({ main: "js", name: project_name }).pg
        );
      case "TypeScript":
        return createFile(
          `${name}/package.json`,
          pkgFiles({ main: "ts", name: project_name }).pgTs
        );
    }
  } else {
    switch (lang) {
      case "JavaScript":
        return createFile(
          `${name}/package.json`,
          pkgFiles({ main: "js", name: project_name }).mainPkg
        );
      case "TypeScript":
        return createFile(
          `${name}/package.json`,
          pkgFiles({ main: "ts", name: project_name }).mainTs
        );
    }
  }
};

/** Creates directories based on the `folders` array. */
const createDir = async (sub) => {
  try {
    for (const dir of folders) {
      await createPath(`${sub}/${dir}`);
      console.log(chalk.blueBright(`✔ Folder created: ${dir}`));
    }
  } catch (error) {
    console.error(
      chalk.redBright(`Error creating directories: ${error.message}`)
    );
    throw error;
  }
};

/** Creates the package.json file and logs success. */
const createJsonFile = async (name, lang, db) => {
  await createPkgFile(name, lang, db, name);
  console.log(chalk.blueBright(`✔ File created: ${name}/package.json`));
};

/** Creates files based on the selected programming language. */
const getLangInput = async (lang, name, db) => {
  const selectedLang = lang.split(" ")[0];

  await createJsonFile(name, selectedLang, db);

  if (selectedLang === exConfig.lang[0]) {
    await createFile(`${name}/server.js`, mainFile.js);
    console.log(chalk.blueBright(`✔ File created: ${name}/server.js`));
  } else {
    await createFile(`${name}/server.ts`, mainFile.ts);
    await createFile(`${name}/nodemon.json`, nodemonFile);
    await createFile(`${name}/tsconfig.json`, tsconfigFile);
    console.log(chalk.blueBright(`✔ File created: ${name}/server.ts`));
    console.log(chalk.blueBright(`✔ File created: ${name}/nodemon.json`));
    console.log(chalk.blueBright(`✔ File created: ${name}/tsconfig.json`));
  }
};

/** Creates database configuration files based on the selected database. */
const getDBInput = async (db, name, lang) => {
  const envFilePath = `${name}/.env`;
  const isAvailable = exConfig.db.includes(db);

  if (!isAvailable) {
    return;
  }

  if (db === exConfig.db[0]) {
    await createFileAsync(envFilePath, envFile().mongo);
    await createFileOnLang(
      lang,
      `${name}/config/mongo.config`,
      dbConfig().mongo
    );
  } else {
    await createFileOnLang(lang, `${name}/config/pg.config`, dbConfig().pg);
    await createFileAsync(envFilePath, envFile().pg);
  }
};

/** Creates the project root and subdirectories. */
const getPath = async (name) => {
  try {
    if (!name) {
      console.log(
        chalk.yellowBright(
          "No project name provided. Skipping directory creation."
        )
      );
      return;
    }

    await createPath(name);
    await createDir(name);
    await createFile(`${name}/.gitignore`, gitignore);

    console.log(chalk.blueBright(`✔ File created: ${name}/.gitignore`));
  } catch (error) {
    console.error(chalk.redBright(`Error creating paths: ${error.message}`));
    throw error;
  }
};

export { getDBInput, getLangInput, getPath };
