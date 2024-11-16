# ExCLI - Your Express App CLI

**ExCLI** is a simple, intuitive CLI tool for creating Express.js applications effortlessly. Whether you're a beginner or an experienced developer, ExCLI helps you get started with fully-configured projects in seconds!

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Commands](#commands)
- [Create a New Project](#create-a-new-project)
- [Example Workflow](#example-workflow)
- [Project Structure](#project-structure)
- [Project Scripts](#project-scripts)
- [What's Next?](#whats-next)

---

## Features

- **Language Selection**: Choose between **JavaScript** and **TypeScript**.
- **Database Integration**: Pre-configured setups for **MongoDB** or **PostgreSQL**.
- **Live Reloading**: Pre-installed and configured **Nodemon** for a smooth development experience.
- **Customizable Templates**: Get a project structure tailored to your needs.
- **Environment Configuration**: Automatically generated `.env` files for database credentials.

---

## Installation

Install ExCLI globally using npm:

```bash
npm install -g excli
```

## Commands

Below are list of available commands.

- `--create` Create a new Express project
- `--clean` Cleanup your working directory
- `--reset` Reset project configuration
- `--help` Display this help menu

## Create a New Project

To scaffold a new Express.js project, run the following command:

```bash
npx excli --create
```

You will be prompted to provide:

1. Project Name: Enter the name for your project.
2. Language: Choose between JavaScript or TypeScript.
3. Database: Select either MongoDB or PostgreSQL or Others.

## Example Workflow

### Running the CLI

```bash
npx excli --create
```

**Prompts**:

```plaintext
What is your project name?: express-app
Which language do you want to use? (JavaScript/TypeScript (Recommended)): TypeScript
Which database do you want to use? (MongoDB/PostgreSQL/Others): PostgreSQL
```

**Result**:

The following project structure is generated:

```lua
express-app/
│── controller/
│── middleware/
│── model/
│── routes/
│── utils/
|   └── pg.config.ts
├── .env
├── .gitignore
├── nodemon.json
├── package.json
│── server.ts
└── tsconfig.json
```

## Project Scripts

Inside your project, the following scripts are pre-configured:

- Start the server

```bash
npm start
```

## What's Next?

Now it's up to you to make your app awesome! Here are some suggestions:

1. Add your routes in the `routes` folder.
2. Configure your database models in the `models` folder.
3. Update the `.env` file with your own secrets and configurations.
4. Check the database configuration in the `config` folder
5. Customize your application logic in `server.ts`
