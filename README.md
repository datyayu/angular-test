# angular-test
Sample component using angular 1.6.5


## Installation
To install the dependencies run:

```sh
$ yarn install # Or `npm install`
```


## Running
To build the project just run:

```sh
$ yarn start # Or `npm start`
```

This will first run the tests to make sure there's no errors, then build the project and finally will start an http-server on [http://localhost:8080](http://localhost:8080) hosting the app.


## Tests
You can run the tests on watch-mode using:

```sh
$ yarn test # Or `npm test`
```


## Project structure

- **`dist`**.

  Includes the application bundle and a demo `index.html` file using the custom component.

- **`spec`**.

  Test files. Must end with `.spec.js`.

- **`src`**.

  Application source files.
