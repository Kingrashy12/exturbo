import { createFile } from "./index.js";
import chalk from "chalk";

export const createFileAsync = async (name, content, ext) => {
  const paths = ext ? `${name}.${ext}` : `${name}`;
  await createFile(`${paths}`, content);
  console.log(chalk.blueBright(`✔ File created: ${paths}`));
};

export const createFileOnLang = async (lang, name, content) => {
  const selectedLang = lang.split(" ")[0];
  switch (selectedLang) {
    case "JavaScript":
      return await createFileAsync(name, content, "js");
    case "TypeScript":
      return await createFileAsync(name, content, "ts");
  }
};
