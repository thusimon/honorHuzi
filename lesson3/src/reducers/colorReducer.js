const colorReducer = (state, action)=>{
    // action should be object, MUST have key "type"
    switch (action.type){
        case "CHANGE_FONT_COLOR":
            // mostly, we should spread the previous state
            // otherwise, the store's state will lose data
            return {...state, color: action.color};
        case "CHANGE_BACKGROUND_COLOR":
            return {...state, bgColor: action.color};
        default:
            return {...state};
    }
};

export default colorReducer;