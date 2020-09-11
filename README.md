# NextJS Typescript Boilerplate

## Credit

Thanks for `@erikdstock` for giving me the base of this boilerplate

## Features

- __Customized Hooks__ by `alantsui5`
	- Global Hooks in Context API
	- swr async middleware
	- debouncer
	- use interval

- __Generators With Interactive console UI__
	- Component Generator
		- Add back bootstrap, material UI etc as custom option
		- Add back hook form to generator as custom option
		- Generate React Component for TSX
		- Generate Hook Component for App
		- Generate Global Hooks Component for App

- __Base Features__ by `@erikdstock`

	- [Typescript](https://www.typescriptlang.org/)
	- Linting with [ESLint](https://eslint.org/)
	- Formatting with [Prettier](https://prettier.io/)
	- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
	- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Future Plans

- [x] Component Generator
	- [x] Add back bootstrap, material UI etc as custom option
	- [x] Add back hook form to generator as custom option
	- [x] Generate React Component for TSX
	- [x] Generate Hook Component for App
	- [x] Generate Global Hooks Component for App
	- [ ] useReducer form of hooks
	- [ ] Add Grommet
	- [ ] Add Tailwind
	- [ ] Upgrade Bootstrap 5(After release)
- [ ] Components Examples
	- [ ] Material UI Examples
	- [ ] Bootstrap Examples
	- [ ] Detail Hook Example withSWR
- [ ] Documentation
	- [ ] Global Hooks in Context API
	- [ ] SWR Async middleware

## How to use

### Using `degit` for initialize the project

Execute [`degit`](degit) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx degit https://github.com/alantsui5/hook-typescript
# or
yarn degit https://github.com/alantsui5/hook-typescript
```

### Using `cli.py` to generate code

```bash
python3 cli.py
```

## Deploy to Cloud

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
