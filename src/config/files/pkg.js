export const pkgFiles = ({ name, main }) => {
  const mainPkg = `{
  "name": "${name}",
  "version": "1.0.0",
  "main": "server.${main}",
  "scripts": {
    "start": "npx nodemon server.${main}"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`;
  const mainTs = `{
  "name": "${name}",
  "version": "1.0.0",
  "main": "server.${main}",
  "scripts": {
    "build": "tsc",
    "start": "npx nodemon server.${main}",
    "serve": "tsc && node dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jsonwebtoken": "^9.0.6"
  }
}`;
  const mongo = `{
  "name": "${name}",
  "version": "1.0.0",
  "main": "server.${main}",
  "scripts": {
    "start": "npx nodemon server.${main}"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.8.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`;
  const mongoTs = `{
 "name": "${name}",
 "version": "1.0.0",
 "main": "server.${main}",
 "scripts": {
    "build": "tsc",
    "start": "npx nodemon server.${main}",
    "serve": "tsc && node dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.8.1"
    },
    "devDependencies": {
        "nodemon": "^3.0.0",
        "ts-node": "^10.9.2",
        "typescript": "^5.4.5",
        "@types/cors": "^2.8.17",
        "@types/express": "^4.17.21",
        "@types/jsonwebtoken": "^9.0.6"
        }
        }`;
  const pg = `{
  "name": "${name}",
  "version": "1.0.0",
  "main": "server.${main}",
  "scripts": {
    "start": "npx nodemon server.${main}"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "pg": "^8.13.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}`;
  const pgTs = `{
  "name": "${name}",
  "version": "1.0.0",
  "main": "server.${main}",
  "scripts": {
    "build": "tsc",
    "start": "npx nodemon server.${main}",
    "serve": "tsc && node dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "jsonwebtoken": "^9.0.2",
    "pg": "^8.13.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.4.5",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jsonwebtoken": "^9.0.6",
    "@types/pg":"^8.11.10"
  }
}`;
  return { mainPkg, mainTs, mongo, mongoTs, pg, pgTs };
};
