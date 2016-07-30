import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';
import ListGroup from '../src/list-group.jsx';
import ListItem from '../src/list-item.jsx';

describe('listgroup', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<ListGroup/>);
		const node = ReactDOM.findDOMNode(instance);

		expect(node.nodeName).to.be('UL');
		expect(node.className).to.be('list-group');
	});

	it('Should hide img element if no image prop', () => {
		const tree = (
			<ListGroup>
				<ListItem title='item'/>
			</ListGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'img');

		expect(items.length).to.be(0);
	});

	it('Should hide img element if image prop exists', () => {
		const tree = (
			<ListGroup>
				<ListItem title='item' image='no.png'/>
			</ListGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'img');

		expect(items.length).to.be(1);
	});
});
