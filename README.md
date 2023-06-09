## Overview

[Parabol](https://www.parabol.co) is an open-source application for running
agile meetings such as team retrospectives or Sprint Poker™. You may try
a single-player demo of Parabol (no login creation required) at: https://parabol.co/retro-demo

We endeavor to be a
transparent organization and publish
our company's [history and SaaS metrics](https://www.parabol.co/blog/tag/friday-ship).

![Dashboard](./docs/images/d2.gif)
![Discuss](./docs/images/d1.gif)

## Stack Information

| Concern                | Solution                                                        |
| ---------------------- | --------------------------------------------------------------- |
| Server                 | [Node](https://nodejs.org/)                                     |
| Server Framework       | [μWebSockets.js](https://github.com/uNetworking/uWebSockets.js) |
| Database (Legacy)      | [RethinkDB](https://www.rethinkdb.com/)                         |
| Database               | [PostgreSQL](https://www.postgresql.org/)                       |
| PubSub & Cache         | [Redis](https://redis.io)                                       |
| Data Transport         | [GraphQL](https://github.com/graphql/graphql-js)                |
| Real-time Connectivity | [trebuchet](https://github.com/mattkrick/trebuchet-client)      |
| Client Cache           | [Relay](https://facebook.github.io/relay/)                      |
| UI Framework           | [React](https://facebook.github.io/react/)                      |
| Styling                | [Emotion](https://emotion.sh/)                                  |

## Setup

### Prerequisites

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html) (Development only)

### Installation

```bash
$ git clone https://github.com/ParabolInc/parabol.git
$ cd parabol
$ cp .env.example .env # Add your own vars here
$ yarn
$ yarn db:start
$ yarn dev
```

- By default, the app will run at: http://localhost:3000/

- If `yarn db:start` failed and `localhost:5050` isn't working, a docker
  container, volume, or image may be corrupted and need to be pruned.

### Development

- [Code Reviews](./docs/codeReview.md)
- [Create new GraphQL Mutations](./packages/server/graphql/public/README.md)
- [Docker](./docker/README.md)
- [Dev.js](./scripts/README.md)
- [File Storage (CDN, Local, S3)](./packages/server/fileStorage/README.md)
- [GraphiQL, Private Schema Admin](./packages/server/graphql/private/README.md)
- [GraphQL Executor](./packages/gql-executor/README.md)
- [Integrations (GitHub, Jira, Slack, etc.)](./docs/integrations.md)
- [PostgreSQL](./packages/server/postgres/README.md)
- [RethinkDB](./packages/server/database/README.md)
- [Shared Scripts](./packages/client/shared/README.md)
- [VS Code Tips](.vscode/tips.md)

### Deploy

```bash
$ yarn && yarn build && yarn start
```
