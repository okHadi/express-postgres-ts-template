# Express.js, PostgreSQL, and TypeScript Starter Template

This is a production-ready starter template for building RESTful APIs with Express.js, PostgreSQL, and TypeScript. It comes with a pre-configured project structure, essential middleware, and a complete Docker setup for easy development and deployment.

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml       # CI/CD workflow for running tests on pull requests
├── docs/
│   ├── Dockerfile          # Dockerfile for the documentation server
│   ├── package.json        # package.json for the documentation server
│   ├── server.js           # Server for serving Swagger documentation
│   └── swagger.yml         # Swagger API documentation
├── src/
│   ├── config/
│   │   ├── db.ts           # Database connection configuration
│   │   ├── environments.ts # Environment variable configuration
│   │   └── swagger.ts      # Swagger configuration
│   ├── controllers/
│   │   └── basic.controller.ts # Example controller
│   ├── libs/
│   │   └── logger.ts       # Logger configuration
│   ├── routes/
│   │   ├── basic.route.ts  # Example route
│   │   └── index.ts        # Main route configuration
│   └── server.ts           # Express server setup
├── tests/
│   ├── routes/
│   │   └── basic.test.ts   # Example test
│   └── docker-compose.yml  # Docker Compose file for the testing environment
├── .env.example            # Example environment file
├── .gitignore              # Git ignore file
├── .prettierignore         # Prettier ignore file
├── .prettierrc             # Prettier configuration file
├── Dockerfile              # Dockerfile for the main application
├── jest.config.js          # Jest configuration file
├── nodemon.json            # Nodemon configuration file
├── package-lock.json       # Package lock file
├── package.json            # Package file
├── README.md               # README file
├── run_tests.sh            # Script for running tests
├── start_service.sh        # Script for starting services
└── tsconfig.json           # TypeScript configuration file
```

## Getting Started

There are two ways to run this application:

### 1. Running with Docker (Recommended)

This is the easiest way to get started. Simply run the following command:

```bash
./start_service.sh --full
```

This will start all the services, including the Express server, PostgreSQL database, pgAdmin, and the Swagger documentation server.

### 2. Running Locally

If you prefer to run the application locally, you will need to have PostgreSQL installed and running on your machine. Then, you can follow these steps:

1.  Install the dependencies:

    ```bash
    npm install
    ```

2.  Create a `.env` file by copying the `.env.example` file:

    ```bash
    cp .env.example .env
    ```

3.  Update the `.env` file with your database credentials.

4.  Start the application:

    ```bash
    npm run dev
    ```

## Available Scripts

- `npm test`: Runs the tests.
- `npm run test:full`: Runs the tests with a full setup, including starting services.
- `npm run build`: Compiles the TypeScript code.
- `npm run start`: Starts the application.
- `npm run dev`: Starts the application in development mode with Nodemon.
- `npm run prettier`: Formats the code with Prettier.
- `npm run prettier:check`: Checks the formatting with Prettier.
- `npm run lint`: Lints the code with ESLint.
- `npm run lint:check`: Checks the linting with ESLint.
- `./start_service.sh --full`: Starts all services.

## API Documentation

The API documentation is generated with Swagger and is available at `http://localhost:8080`.

## CI/CD

This repository includes a CI/CD workflow that runs on every pull request. The workflow installs the dependencies, starts the services, and runs the tests.
