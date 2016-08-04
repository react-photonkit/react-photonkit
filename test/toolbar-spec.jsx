import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';
import Toolbar from '../src/toolbar.jsx';

describe('toolbar', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Toolbar/>);
		const toolbar = ReactDOM.findDOMNode(instance);
		const classNames = toolbar.className.split(/\s+/);

		expect(toolbar.nodeName).to.be('HEADER');
		expect(classNames).to.contain('toolbar');
		expect(classNames).to.contain('toolbar-header');
	});

	it('Should create toolbar(header) element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Toolbar ptType="header"/>);
		const toolbar = ReactDOM.findDOMNode(instance);
		const classNames = toolbar.className.split(/\s+/);

		expect(toolbar.nodeName).to.be('HEADER');
		expect(classNames).to.contain('toolbar');
		expect(classNames).to.contain('toolbar-header');
	});

	it('Should create toolbar(footer) element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Toolbar ptType="footer"/>);
		const toolbar = ReactDOM.findDOMNode(instance);
		const classNames = toolbar.className.split(/\s+/);

		expect(toolbar.nodeName).to.be('FOOTER');
		expect(classNames).to.contain('toolbar');
		expect(classNames).to.contain('toolbar-footer');
	});
});
