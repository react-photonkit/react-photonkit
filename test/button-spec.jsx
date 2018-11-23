import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../src/button.jsx';

describe('button', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Button/>);
		const button = instance.node;
		const classNames = button.className.split(/\s+/);

		expect(button.nodeName).to.be('BUTTON');
		expect(classNames).to.contain('btn');
		expect(classNames).to.contain('btn-default');
	});

	it('Should create element with text', () => {
		const text = 'button';
		const instance = ReactTestUtils.renderIntoDocument(<Button text={text}/>);
		const button = instance.node;

		expect(button.textContent).to.be(text);
	});

	it('Should create default element with size', () => {
		let sizes = ['large', 'mini'];
		let instance;
		let size;
		let button;
		let classNames;

		sizes.forEach(size => {
			instance = ReactTestUtils.renderIntoDocument(<Button ptSize={size}/>);
			button = instance.node;
			classNames = button.className.split(/\s+/);
			expect(classNames).to.contain(`btn-${size}`);
		});

		size = 'another';
		instance = ReactTestUtils.renderIntoDocument(<Button btSize={size}/>);
		button = instance.node;
		classNames = button.className.split(/\s+/);
		expect(classNames).to.not.contain(`btn-${size}`);
	});

	it('Should create default element with style', () => {
		let styles = ['default', 'primary', 'positive', 'negative', 'warning'];
		let instance;
		let style;
		let button;
		let classNames;

		styles.forEach(style => {
			instance = ReactTestUtils.renderIntoDocument(<Button ptStyle={style}/>);

			button = instance.node;
			classNames = button.className.split(/\s+/);
			expect(classNames).to.contain(`btn-${style}`);
		});

		style = 'another';
		instance = ReactTestUtils.renderIntoDocument(<Button ptStyle={style}/>);
		button = instance.node;

		classNames = button.className.split(/\s+/);
		expect(classNames).to.not.contain(`btn-${style}`);
	});

	it('Should create default element with icon', () => {
		const name = 'home';
		const element = <Button glyph={name}/>;
		const instance = ReactTestUtils.renderIntoDocument(element);
		const button = instance.node;

		const icon = button.firstChild;
		const classNames = icon.className.split(/\s+/);
		expect(classNames).to.contain(`icon-${name}`);
	});

	it('Should create default element with icon and text', () => {
		const name = 'home';
		const text = 'button';
		const element = <Button glyph={name} text={text}/>;
		const instance = ReactTestUtils.renderIntoDocument(element);
		const button = instance.node;

		const icon = button.firstChild;
		const classNames = icon.className.split(/\s+/);
		expect(classNames).to.contain(`icon-${name}`);
		expect(button.textContent).to.be(text);
	});

	it('Should call onClick callback', done => {
		const onClick = () => done();
		const instance = ReactTestUtils.renderIntoDocument(<Button onClick={onClick}/>);
		const button = instance.node;
		ReactTestUtils.Simulate.click(button);
	});

	it('Should be active', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Button active/>);
		const button = instance.node;

		const classNames = button.className.split(/\s+/);
		expect(classNames).to.contain('active');
	});
});
