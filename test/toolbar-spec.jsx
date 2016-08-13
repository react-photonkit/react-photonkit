import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Toolbar from '../src/toolbar.jsx';

describe('toolbar', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Toolbar/>);
		const classNames = instance.node.className.split(/\s+/);

		expect(instance.node.nodeName).to.be('HEADER');
		expect(classNames).to.contain('toolbar');
		expect(classNames).to.contain('toolbar-header');
	});

	it('Should create toolbar(header) element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Toolbar ptType="header"/>);
		const classNames = instance.node.className.split(/\s+/);

		expect(instance.node.nodeName).to.be('HEADER');
		expect(classNames).to.contain('toolbar');
		expect(classNames).to.contain('toolbar-header');
	});

	it('Should create toolbar(footer) element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Toolbar ptType="footer"/>);
		const classNames = instance.node.className.split(/\s+/);

		expect(instance.node.nodeName).to.be('FOOTER');
		expect(classNames).to.contain('toolbar');
		expect(classNames).to.contain('toolbar-footer');
	});
});
