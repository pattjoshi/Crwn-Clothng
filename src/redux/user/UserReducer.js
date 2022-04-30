import { UserActionTypes } from './UserTypes'

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    // This is ES6 fracher we canstore the default paramenter
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        // Any of the state is not match then default is return
        default:
            return state;
    }
};

export default userReducer;



// Reducer is just a function that get 2 property
// The current state and an action object.
// Action is just a object 'type'
// It carries a payload of information from your application to store
// 