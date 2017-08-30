require('./testdom')('<html><body></body></html>');
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const MemberList = require('../client/js/components/List.js');

describe('List', () => {
	it('renders', () => {
		const element = TestUtils.renderIntoDocument(<List />);
		expect(element).toBeTruthy();
	});
});