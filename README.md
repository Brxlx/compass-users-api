# Compass Users API

Built in Node.js + TypeScript 💜

---

### Important:

- Use Node `v14.x` or higher.
- Install all dependencies at first try. Use `yarn`.


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
  - To correctly run the application on database, make sure that exists a database named `compass` with the `public` *schema!*.
  - Before run the migrations, **make sure to create the database on public schema and activate the citext extension**

      ```sql
      CREATE EXTENSION citext SCHEMA public;
      ```
  - Make sure to run the `yarn db:migrate` to run all the migrations!

### Documentation

  - Provided by `swagger`.