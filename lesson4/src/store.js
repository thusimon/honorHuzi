import colorReducer from './reducers/colorReducer';
import combineReducers from './reducers/combineReducers';

// create a store
const createStore = (stat = {}, reducer)=>{
    let state = stat;
    if (!state){
        state = {};
    }
    let listeners = [];
    // get state
    const getState = ()=>state;
    const dispatch = (action) => {
        let newState = reducer(state, action);
        state = newState;
        listeners.forEach((listener)=>{
            listener();
        });
        return state;
    };
    const observe = (listener) => {
        listeners.push(listener);
    };
    return {getState, dispatch, observe};
};

const initState = {color:"#000000", bgColor:"#FFFFFF"};
const store  = createStore(initState, combineReducers({colorReducer}));
export default store;