// create a store

// this function will return three functions
export const createStore = (initState={}, reducer)=>{
    // the initial state;
    let state = initState;
    const listeners = [];
    const observe = (listener) => listeners.push(listener);
    const getState = ()=>state;
    const dispatch = (action)=>{
        // call the reducer to perform the action
        // reducer has there own logic
        // reducer MUST return a new state
        let newState = reducer(state, action);
        // replace the current state with new state
        state = newState;
        // every time dispatches, it means the state may change;
        // should trigger all the components to render
        listeners.forEach((listener)=>listener());
        return state;
    };
    return {getState, dispatch, observe};
};