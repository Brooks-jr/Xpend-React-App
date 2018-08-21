import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/expenses-summary';

test('should render expenses summary with a single expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={250} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={700} />);
    expect(wrapper).toMatchSnapshot();
});