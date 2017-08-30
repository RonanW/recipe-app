require('./testdom')('<html><body></body></html>');
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const MemberList = require('../client/js/components/Header.js');

describe('Header', () => {
	it('renders', () => {
		const element = TestUtils.renderIntoDocument(<Header />);
		expect(element).toBeTruthy();
	});
});