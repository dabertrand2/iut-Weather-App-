import {configureStore} from '@reduxjs/toolkit';
import appReducer from './reducers/weatherReducer';

const reducer ={
    appReducer: appReducer,
}
 const store = configureStore({
    reducer,
 },);

export default store;

