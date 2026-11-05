# Exam Project

Backend for the Full Stack Node.js exam project, built with Express.

## Setup

```sh
npm install
cp .env.example .env
npm run start-dev
```

## Structure

- `app.js`: sets up middleware, mounts the routers and starts the server.
- `routers/`: one router per collection. Each route keeps its full path.
- `middleware/`: Express middleware such as `requireAuth`.
- `database/`: database connection and queries.
- `util/`: shared helpers.
