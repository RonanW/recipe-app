require('./testdom')('<html><body></body></html>');
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const MemberList = require('../client/js/components/CoolingTimeFilter.js');

describe('CoolingTimeFilter', () => {
	it('renders', () => {
		const element = TestUtils.renderIntoDocument(<CoolingTimeFilter />);
		expect(element).toBeTruthy();
	});

	it('does the thing when the state is such', function() {
		this.component.refs.stub.setState({
		isLoading: false
		});
	});

});