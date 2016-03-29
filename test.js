import test from 'ava';
import fs from './';

test('get lux', async t => {
	const lux = await fs();
	t.true(lux >= 0);
});
