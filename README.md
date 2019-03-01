
# axios-timed
[![package version](https://img.shields.io/npm/v/axios-timed.svg?style=flat-square)](https://npmjs.org/package/axios-timed)
[![package downloads](https://img.shields.io/npm/dm/axios-timed.svg?style=flat-square)](https://npmjs.org/package/axios-timed)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/axios-timed.svg?style=flat-square)](https://npmjs.org/package/axios-timed)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/axios-timed.svg)](https://greenkeeper.io/)

> Time axios requests

## Table of Contents

- [axios-timed](#axios-timed)
	- [Table of Contents](#table-of-contents)
	- [Install](#install)
	- [Usage](#usage)
	- [Contribute](#contribute)
	- [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install axios-timed
$ # OR
$ yarn add axios-timed
```

## Usage

```js
import axios from 'axios'
import axiosTimed from 'axios-timed'

axiosTimed(axios, response => console.log('ms', response.config.ms))

axios
	.get('https://jsonplaceholder.typicode.com/todos/')
	.then(console.log)
	.catch(console.error)
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    