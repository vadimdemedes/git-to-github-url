# git-to-github-url [![Build Status](https://travis-ci.org/vadimdemedes/git-to-github-url.svg?branch=master)](https://travis-ci.org/vadimdemedes/git-to-github-url)

> Get GitHub URL for a git repository


## Install

```
$ npm install git-to-github-url
```


## Usage

```js
const gitToGithubUrl = require('git-to-github-url');

(async () => {
	console.log(await gitToGithubUrl());
	//=> 'https://github.com/vadimdemedes/ink'
})();
```


## API

### gitToGithubUrl([cwd])

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Path to a git repository.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
