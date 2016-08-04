import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';
import Table from '../src/table.jsx';

describe('table', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Table/>);
		const node = ReactDOM.findDOMNode(instance);

		expect(node.className).to.be('table-striped');
	});
});
