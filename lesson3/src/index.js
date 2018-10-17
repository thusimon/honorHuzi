/**
 * Created by Lu on 10/10/2018.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from './store';
import {combineReducers} from './reducers/combineReducers';
import colorReducer from './reducers/colorReducer';
import App from './components/App';

let state = {color:"#000000", bgColor: "#ffffff"};
let allReducers = combineReducers({colorReducer});

const rerenderAll = (oldState, newState)=>{
    if (oldState.color==newState.color && oldState.bgColor==newState.bgColor){
        return;
    }
    render(
        <App color={newState.color} bgColor={newState.bgColor}/>,
        document.getElementById("app")
    );
};

const store = createStore(state, allReducers);
let oldState = store.getState();
store.observe(()=>{
    const newState = store.getState();
    rerenderAll(oldState, newState);
    oldState = newState;
});

//rerenderAll(state, oldState);

store.dispatch({type:"CHANGE_FONT_COLOR", color:"#FF0000"});

setTimeout(()=>{
    store.dispatch({type:"CHANGE_FONT_COLOR", color:"#00FF00"});
}, 3000);

setTimeout(()=>{
    store.dispatch({type:"CHANGE_BACKGROUND_COLOR", color:"#0000FF"});
}, 5000);



//store.dispatch({type:"CHANGE_FONT_COLOR", color:"#FF0000"});








