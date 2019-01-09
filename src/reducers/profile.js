//set an initial blank state
const initialState = {
    profile: {}
}

export default function(state = initialState, action) {
    //switch based on type of action received
    switch (action.type) {
        case 'GET_PROFILE':
            //payload is the property in action where data is passed
            return {...state, profile: action.payload}
        default:
            return state
    }
    
}