export const cases = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CASE':
            return {
                ...state,
                [action.id]: {
                    query: action.payload.query,
                    posts: action.payload.posts,
                }
            };

        default:
            return state;
    }
};

