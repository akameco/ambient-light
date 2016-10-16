'use strict';
const execa = require('execa');

module.exports = () => {
	return new Promise((resolve, reject) => {
		execa(`${__dirname}/osx-lux`).then(result => {
			resolve(Number(result.stdout));
		}).catch(err => {
			reject(new Error(`ambient-light ${err}`));
		});
	});
};
