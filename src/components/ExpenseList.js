import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        {props.expenses.map((expense, index) => (
            <ExpenseListItem 
                {...expense}
                key={expense.id}
            />
         )) 
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

