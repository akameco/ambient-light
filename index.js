'use strict';
const execa = require('execa');

module.exports = () => {
	return new Promise((resolve, reject) => {
		execa('./osx-lux').then(result => {
			resolve(Number(result.stdout));
		}).catch(e => {
			reject(`ambient-light ${e}`);
		});
	});
};
