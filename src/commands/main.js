import arg from "arg";
import chalk from "chalk";
import { logger } from "../logger.js";

// Function to display help instructions
const showHelp = () => {
  console.log(`
${chalk.whiteBright("Usage:")} ${chalk.greenBright("ex-cli [CMD] [OPTIONS]")}

Commands:
  ${chalk.greenBright("--create")}   Create a new Express project
  ${chalk.greenBright("--clean")}    Cleanup your working directory
  ${chalk.greenBright("--reset")}    Reset project configuration
  ${chalk.greenBright("--help")}     Display this help menu

Examples:
  ${chalk.blueBright("npx ex-cli --create")}
  ${chalk.blueBright("npx ex-cli --clean")}
  ${chalk.blueBright("npx ex-cli --help")}
  `);
};

// Main CLI function
export const Cli = async (create) => {
  const runCLI = async () => {
    try {
      const args = parseArguments();
      await handleCommand(args, create);
    } catch (error) {
      logger.warning(`Error: ${chalk.redBright(error.message)}
Use ${chalk.greenBright("--help")} to see the list of available commands.
`);
    }
  };

  runCLI();
};

// Function to parse CLI arguments
const parseArguments = () => {
  return arg({
    "--create": Boolean,
    "--clean": Boolean,
    "--reset": Boolean,
    "--help": Boolean,
  });
};

// Function to handle commands based on parsed arguments
const handleCommand = async (args, create) => {
  if (args["--help"]) {
    showHelp();
    return;
  }

  if (args["--create"]) {
    await create();
  } else if (args["--clean"]) {
    logger.info("Under development");
  } else if (args["--reset"]) {
    logger.info("Under development");
  } else {
    logger.warning("Invalid command. Use --help for usage instructions.");
    showHelp();
  }
};
