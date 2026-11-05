# Exam Project

Backend for a draw-and-guess website, built with Express for the Full Stack Node.js exam project. Players draw and guess in groups, with a scoreboard for each group, user stats and a gallery of saved drawings.

## Setup

```sh
npm install
cp .env.example .env
npm run start-dev
```

## Linting

```sh
npm run lint
npm run lint-fix
```

## Structure

- `app.js`: sets up middleware, mounts the routers and starts the server.
- `routers/`: one router per collection. Each route keeps its full path.
- `database/`: database connection and queries.
- `util/`: shared helpers.
