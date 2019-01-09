//set initial state of repos as blank array
//repos are stored as an array of objects
const initialState = {
    repos: []
}

export default function(state = initialState, action) {
    //switch based on type of action received
    switch (action.type) {
        case 'GET_REPOS':
            //payload is the property in action that contains data
            return {...state, repos: action.payload}
        default:
            return state
    }
    
}