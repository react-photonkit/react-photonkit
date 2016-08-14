import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Input from '../src/input.jsx';
import CheckBox from '../src/checkbox.jsx';

describe('input', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Input/>);

		expect(instance.node.nodeName).to.be('DIV');
		expect(instance.node.className).to.be('form-group');
	});

	it('Should create element with label', () => {
		const label = 'label';
		const instance = ReactTestUtils.renderIntoDocument(<Input label={label}/>);
		const e = instance.node.querySelector('label');

		expect(e.textContent).to.be(label);
	});

	it('Should create a element with type', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Input type="email"/>);

		expect(instance.node.className).to.be('form-group');
	});

	it('Should update with value', () => {
		const value = 'anonymous@gmail.com';
		const instance = ReactTestUtils.renderIntoDocument(<Input/>);
		const e = instance.node.querySelector('input');

		e.value = value;
		ReactTestUtils.Simulate.change(e);
		expect(e.value).to.be(value);
	});
});

describe('check', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<CheckBox/>);

		expect(instance.node.nodeName).to.be('DIV');
		expect(instance.node.className).to.be('checkbox');
	});

	it('Should create element with label', () => {
		const label = 'label';
		const instance = ReactTestUtils.renderIntoDocument(<CheckBox label={label}/>);
		const e = instance.node.querySelector('label');

		expect(e.textContent).to.be(label);
	});

	it('Should be checked', () => {
		const instance = ReactTestUtils.renderIntoDocument(<CheckBox/>);
		const e = instance.node.querySelector('input');

		e.checked = true;
		ReactTestUtils.Simulate.change(e, {target: {checked: true}});
		expect(instance.isChecked()).to.be(true);
	});});
