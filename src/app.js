import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import visibleExpense from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 20, createdAt: 130 }));
store.dispatch(addExpense({ description: 'Food Bill', amount: 50, createdAt: -245 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 250 }));

// store.dispatch(setTextFilter('food'));

const state = store.getState();
// console.log(store.getState());
console.log(visibleExpense(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
