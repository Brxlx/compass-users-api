# Compass Users API

Built in Node.js + TypeScript 💜

---

### Important:

- Use Node `v14.x` or higher.
- Install all dependencies at first try. Use `yarn`
<!-- - Run `yarn commitizen init cz-conventional-changelog --yarn --dev --exact` for get the commit cli. -->

### Code style guide

  - Standard by `airbnb` 
  - Default spacer is `space`.
  - Space size identation: `2`.
  - Default line breaker: `LF`

  Other settings will automatically follow the `.editorconfig` file.

### Linting rules

  Automatically followed by `eslint`, `airbnb`_style guide_ and `prettier` rules.

### Running the scripts

  - `yarn dev` to start the development server.
  - `yarn db:generate` to generate prisma auto type files.
  - `yarn db:migrate` to run all the migrations.
  - `yarn test` to run the tests with `JEST`.
  - `yarn build` to generate the build `.js` files with babel.
