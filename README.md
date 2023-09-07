# 🚀 **Secure-Arc**: The Tech Blueprint README

Hello and welcome to the Secure-Arc tech blueprint! This README is your guide to understanding our technology architecture and the standards we maintain. Let's dive in!

## 🛠 **Tech Stack**

- **Package Management**: 🧶 We use [Yarn](https://classic.yarnpkg.com/) for a fast, reliable, and secure dependency management experience.
- **Frontend**: ⚡ Our frontend is built with [Next.js](https://nextjs.org/), styled by [Chakra-UI](https://chakra-ui.com/), and managed state-wise using [Redux](https://redux.js.org/).
- **Backend**: 🚂 We ride on [Express.js](https://expressjs.com/) for a minimal and flexible backend solution.
- **Architecture**: 🏛 We follow the [Monorepo](https://en.wikipedia.org/wiki/Monorepo) architecture, keeping our codebase unified.
- **File Storage**: ☁️ For cloud storage needs, we trust [Azure Store](https://azure.microsoft.com/en-us/services/storage/).
- **Primary Database**: 🍃 Our choice of database is [MongoDB](https://www.mongodb.com/), and we dock it using [Docker](https://www.docker.com/).
- **Authentication**: 🛡 To verify and validate, we use [JWT](https://jwt.io/).

## 📖 **Guidelines**

- **Environment Variables**: Please ensure to format them in UPPER_SNAKE_CASE.
- **Linting**: To maintain our code elegance and standards, we rely on [ESLint](https://eslint.org/).
- **Ordering**: Keep your `package.json` neat and orderly with `npx sort-package-json`.
- **Environments**: We have three environments -
  - `DEV`: The sandbox where you can play around.
  - `STAG`: The final rehearsal before the big show.
  - `PROD`: The grand stage where everything should run flawlessly.
  
- **Branching**:
  - `master`: This branch reflects our gold standard. Untouched and pristine.
  - `release`: This is the last stop before reaching master. It's for final touches.
  - `develop`: The birthplace of new features and fixes.

- **Testing**: To ensure reliability and quality, we test with [Jest](https://jestjs.io/).

---

### 📜 Database Operations

#### Dumping the Database

To create a dump of the 'secure' database, use the following command:

```bash
sudo docker exec -it mongodb_container mongodump -d secure -o /dump
sudo docker cp mongodb_container:/dump/secure ./dump
```

#### Restoring the Database

To restore the MongoDB data from the dump directory, use this command:

```bash
sudo docker exec -it mongodb_container mongorestore /dump
```

#### Stopping the Database Container

To stop the MongoDB container when needed, use the command:

```bash
sudo docker stop mongodb_container
```

---

Thank you for joining **Secure-Arc**! Let's collaborate and continue to build secure, innovative, and state-of-the-art tech solutions! 🚀🌠
