import fs from "fs";
import { logger } from "../logger.js";

export const createPath = async (folderName) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    logger.warning(err);
  }
};

export const createFile = async (name, content) => {
  try {
    if (!fs.existsSync(name)) {
      fs.writeFileSync(name, content);
    }
  } catch (err) {
    logger.warning(err);
  }
};

export const updateFile = async () => {
  try {
  } catch (error) {
    logger.warning(error);
  }
};
