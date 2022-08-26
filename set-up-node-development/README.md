https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

from:
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

guide on node and express.

notes/steps:

npm init -y
npm i express
npm i eslint -D
npm init @eslint/config

add these to eslintrc.js

```js
rules: {
    'no-console': 'off',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
```

separate:
npm install express-generator -g

with express generator -g:
`express helloworld`
in the terminal, and have it generate a small project template.
Comparable to create-react-app but for express.

```
Note: You can also specify the template library to use and a number of other settings. Use the help command to see all the options:

express --help
Copy to Clipboard
Note: If you're using NodeJS version > 8.2.0 or latest, you can skip the installation and run express-generator with npx:

npx express-generator helloworld
```
