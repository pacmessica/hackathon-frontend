const fakeReport = {
    posts: []
};

export const report = (state = fakeReport, action) => {
    switch (action.type) {
        case 'ADD_REPORT':
            return action.payload;

        default:
            return state;
    }
};

