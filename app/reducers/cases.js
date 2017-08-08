const initialState = {

};

export const cases = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CASE':
            return {
                ...state,
                [action.id]: {
                    posts: action.payload,
                }
            };

        default:
            return state;
    }
};

