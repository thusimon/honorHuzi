const combineReducers = (reducers)=>{
    // reducers should be an object;
    // each property is a function: (state, action)=>{}
    // the purpose is to return one function that achieve all the functions
    const combinedReducer = (state, action)=>{
        for (let key in reducers){
            let curReducer = reducers[key];
            let curReducerState = curReducer(state, action);
            state = {...state, ...curReducerState};
        }
        return state;
    };
    return combinedReducer;
};

export default combineReducers;