export const env = crypto.randomUUID();

export const folders = [
  "controller",
  "routes",
  "middleware",
  "model",
  "config",
];

// export const pkgFile = ({ extra, exDev, main, tsServe, exScript, name }) => {
//   return `
// {
//   "name": "${name}",
//   "version": "1.0.0",
//   "main": "server.${main}",
//   "scripts": {
//     "start": "npx nodemon server.${main}"${tsServe ? "," : ""}
//     ${exScript ? exScript : ""}${exScript ? "," : ""}
//     ${tsServe ? tsServe : ""}
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "body-parser": "^1.20.2",
//     "cors": "^2.8.5",
//     "dotenv": "^16.4.5",
//     "express": "^4.21.1",
//     "jsonwebtoken": "^9.0.2"${extra ? "," : ""}
//     ${extra ? extra : ""}
//   },
//   "devDependencies": {
//     "nodemon": "^3.0.0"${exDev ? "," : ""}
//     ${exDev ? exDev : ""}
//   }
// }
// `;
// };

// export const extraPkg = {
//   ts_dev: `
// "ts-node": "^10.9.2",
// "typescript": "^5.4.5",
// "@types/cors": "^2.8.17",
// "@types/express": "^4.17.21",
// "@types/jsonwebtoken": "^9.0.6"
//     `,
//   mongo: `"mongoose": "^8.8.1"`,
//   pg: `"pg": "^8.13.1"`,
//   pg_dev: `
// "ts-node": "^10.9.2",
// "typescript": "^5.4.5",
// "@types/cors": "^2.8.17",
// "@types/express": "^4.17.21",
// "@types/jsonwebtoken": "^9.0.6",
// "@types/pg":"^8.11.10"
//       `,
//   tsServe: `"serve": "tsc && node dist/server.js"`,
//   exScript: `"build": "tsc"`,
// };

export const envFile = () => {
  const pg = `
  PG_USER=YourUserName
  PG_DB=YourDatabase
  PG_PASS=YourPassword
  PG_HOST=YourHost
  JWT_SECRET="${env}"
    `;

  const mongo = `
  DB_STRING=Your Connection String
  JWT_SECRET="${env}"
    `;

  return { pg, mongo };
};

export const dbConfig = () => {
  const pg = `
import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  user: process.env.PG_USER.toString(),
  host: process.env.PG_HOST.toString(),
  database: process.env.PG_DB.toString(),
  password: process.env.PG_PASS.toString(),
  port: 5432, // Adjust if using a non-default port
});

    
export default pool
  `;

  const mongo = `
import mongoose from "mongoose";
import 'dotenv/config';

const DB_STRING = process.env.DB || "";

// Connection options, including connection pooling settings
const options = {
  maxPoolSize: 10, // Maximum number of connections in the pool
  minPoolSize: 5, // Minimum number of connections in the pool
  maxIdleTimeMS: 30000, // Max time a connection can remain idle before being closed
  socketTimeoutMS: 45000, // Timeout for socket inactivity
  connectTimeoutMS: 30000, // Timeout for initial connection
};

const connectDB = async () => {
  try {
    await mongoose.connect(DB_STRING, options);
    console.log("Connected to DB");
  } catch (error) {
    if (
      error.name === "MongoNetworkError" &&
      error.message.includes("ETIMEDOU")
    ) {
      console.error("Connection timed out: Please check your network status.");
    } else if (
      error.name === "MongoNetworkError" &&
      error.message.includes("ETIMEDOUT")
    ) {
      throw new Error("Server timed out");
    } else {
      console.error('Connection failed: {error?.message}'); //Update this line
    }
    process.exit(1); // Optionally exit the process if the connection fails
  }
};

export default connectDB;
  `;

  return { pg, mongo };
};

export const mainFile = {
  js: `
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize express app
const app = express();

// Middleware setup
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());  // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded data

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port http://localhost:{PORT}');
});
    `,
  ts: `
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize express app
const app = express();

// Middleware setup
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());  // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded data

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port {PORT}');
});
    `,
};

export const gitignore = `
# Node.js dependencies
/node_modules/

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment files
.env

# Build outputs
/dist/
/build/
/coverage/
`;

export const nodemonFile = `
{
    "execMap": {
        "ts": "ts-node"
    }
}
`;

export const tsconfigFile = `
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./",
    "typeRoots": ["./node_modules/@types", "./types"]
  },
  "include": ["./**/*.ts", "./types/**/*.d.ts"]
}
`;
