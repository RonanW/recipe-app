require('./testdom')('<html><body></body></html>');
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const MemberList = require('../client/js/components/RecipeList.js');

describe('RecipeList', () => {
	it('renders', () => {
		const element = TestUtils.renderIntoDocument(<RecipeList />);
		expect(element).toBeTruthy();
	});

	it('sets state of select value', function() {
		this.component.refs.stub.setState({
			selectValue: 1
		});
	});

	it('sets state of time value', function() {
		this.component.refs.stub.setState({
			timeValue: 13
		});
	});
});