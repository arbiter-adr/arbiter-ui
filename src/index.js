import * as Components from './components/index';
import * as Actions from './actions/index';
import * as Reducers from './reducers/index';

// const Reducers = require('require-all')(__dirname + '/reducers');




import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';


// Import component to your project
let { Header, Footer, Body } = Components;


const reducer = combineReducers({...Reducers});
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
  </Provider>, document.getElementById('app'));
