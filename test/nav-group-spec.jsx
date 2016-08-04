import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';
import NavGroup from '../src/nav-group.jsx';
import NavGroupItem from '../src/nav-group-item.jsx';

describe('navgroup', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<NavGroup/>);
		const node = ReactDOM.findDOMNode(instance);

		expect(node.nodeName).to.be('NAV');
		expect(node.className).to.be('nav-group');
	});

	it('Should be active', () => {
		const tree = (
			<NavGroup activeKey={1}>
				<NavGroupItem eventKey={1} glyph="home" text="home"/>
				<NavGroupItem eventKey={2} glyph="cc" text="cc"/>
			</NavGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedComponentsWithType(instance, NavGroupItem);

		expect(items.length).to.be(2);
		expect(items[0].props.active).to.ok();
		expect(items[1].props.active).to.not.ok();
	});

	it('Should be active when clicked', done => {
		const onSelect = key => {
			expect(2).to.be(key);
			done();
		};

		const tree = (
			<NavGroup activeKey={1} onSelect={onSelect}>
				<NavGroupItem eventKey={1} glyph="home" text="home"/>
				<NavGroupItem eventKey={2} glyph="cc" text="cc"/>
			</NavGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'a');
		ReactTestUtils.Simulate.click(items[1]);
	});

	it('Draggable should be endabled', () => {
		const tree = (
			<NavGroup activeKey={1} draggable>
				<NavGroupItem eventKey={1} glyph="home" text="home"/>
				<NavGroupItem eventKey={2} glyph="cc" text="cc"/>
			</NavGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		expect(instance.sortableOptions.disabled).to.be(false);
	});
});
