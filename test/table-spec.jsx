import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Table from '../src/table.jsx';

describe('table', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Table/>);

		expect(instance.node.className).to.be('table-striped');
	});
});
