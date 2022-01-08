<h1 align="center"> <img src="https://w7.pngwing.com/pngs/307/624/png-transparent-computer-icons-house-home-icon-angle-text-logo.png" width="30">
 WhereIsMyHome - backoffice </h1>

---

 <h4 align="center"> Project created with focus on help to find the best place to live without have to do a bunch of clicks. </h4>

<br>

---

[![codecov](https://codecov.io/gh/rafaelandrade/wmh-backoffice/branch/main/graph/badge.svg?token=FTLUEOROMP)](https://codecov.io/gh/rafaelandrade/wmh-backoffice)
[![DeepSource](https://deepsource.io/gh/rafaelandrade/wmh-backoffice.svg/?label=active+issues&show_trend=true&token=yis2PC5vrWaO-wtAh9c5pGlI)](https://deepsource.io/gh/rafaelandrade/wmh-backoffice/?ref=repository-badge)

<p>⭐ Star us on GitHub — it motivates us a lot!</p>

---

<h2> 👉 Quick start </h2>

This is a Typescript project focused on handlers with database requests like update, creation, and selection. The proposition for the creation of this microservice is for don't have to make a connection of the database in all microservices and only he is responsible for it.

---

<h2> 🔌 Technologies </h2>

- Docker
- [Sentry](https://docs.sentry.io/)
- [Coralogix](https://coralogix.com/integrations/coralogix-python-integration/)
- [Prisma](https://www.prisma.io/docs/concepts/overview/what-is-prisma)
- [Jest](https://jestjs.io/docs/getting-started)

---

<h2> ⚡️ First steps: </h2>

The project used `yarn` library. In case of not being installed should follow these [tutorial](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

```bash
# Clone this repository
$ git clone https://github.com/rafaelandrade/wmh-backoffice.git

# Access the project folder in the terminal/cmd
$ cd wmh-backoffice

# Install the dependencies
$ yarn install

# Remember to clone the .env.example file to an .env file and fill the file.

# Already is created a docker to initialiaze a postgres database and already have some data
# only need to run.

# It's recommended to run docker compose up in an new terminal tab.

docker compose up

# To execute the server just need to run
yarn dev:server
```

---

## 🧚 Executing Tests

To execute the test is simple, have the options:

- Run `yarn run test` for test with coverage
- Run `yarn run test:unit` for run test created or changed
- Run `yarn run test:ci` going to execute the test equal in GitHub actions
