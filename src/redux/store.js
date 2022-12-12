import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import greetReducer from './Greeting/greeting';

const rootReducer = combineReducers({
  greetings: greetReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
