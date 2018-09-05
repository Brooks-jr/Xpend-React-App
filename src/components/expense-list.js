import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="container">
        <div className="list-header">
            <div>Expense</div>
            <div>Amount</div>
        </div>

        <div className="list-wrap">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list--message">
                        <h3>No Expenses Found</h3>
                    </div>

                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
