const initialState = {
    posts: [],
};

export const cases = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CASE':
            return {
                posts: action.payload,
            };

        default:
            return state;
    }
};

