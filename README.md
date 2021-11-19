# Compass Users API

Built in Node.js + TypeScript 💜

---

### Important:

- Use Node `v14.x` or higher.
- Install all dependencies at first try. Use `yarn`.
- Create a `.env` file based on `.env.example` on the root.
- Follow the instructions on the `Database` section.
- The default port is `3000`.


### Code style guide

  - Standard by `airbnb` .
  - Default spacer is `space`.
  - Space size identation: `2`.
  - Default line breaker: `LF`.

  Other settings will automatically follow the `.editorconfig` file.

### Linting rules

  Automatically followed by `eslint`, `airbnb`_style guide_ and `prettier` rules.

### Running the scripts

  - `yarn dev` to start the development server.
  - `yarn db:generate` to generate prisma auto type files.
  - `yarn db:migrate` to run all the migrations.
  - `yarn test` to run the tests with `JEST`.
  - `yarn build` to generate the build `.js` files with babel.


### Database

  - `PostgreSQL`.
  - To correctly run the application on database, make sure to pass the `public` *schema!* on the url string connection.
  - Make sure to run the `yarn db:migrate` to run all the migrations!

### Documentation

  - Provided by `swagger`.
  - Visual Runtime to execute all the endpoints of the application.
  - Access url via `http://localhost:3000/v1/docs`.