# ambient-light

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/ambient-light.svg)](https://greenkeeper.io/)

> Get ambient light in OSX

## Installation

```
$ npm install --save ambient-light
```

## Usage

```js
const ambientLight = require('ambient-light');
ambientLight().then(lux => {
	console.log(lux);
	// => 63
});
```

## License

MIT
