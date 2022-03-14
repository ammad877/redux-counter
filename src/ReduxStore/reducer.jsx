const INITIAL_STATE = {
    counter:0
}

function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case "INCREAMENT":
        return{...state,conter:state.counter + 1}
    }
    return state
}

export default reducer