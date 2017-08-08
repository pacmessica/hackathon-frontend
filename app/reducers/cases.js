const initialState = {
    posts: [
        {
            id: 'abcd',
            location: 'Amsterdam',
            created: '8 august, 7:27',
            title: 'Aanbod : Hans van Zuijlen - Tweedehands-Mountainbikes',
            photos: ['https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/s~AAAOSwbtVZV2cx/$_86.JPG'],
        }, {
            id: 'efgh',
            location: 'Amsterdam',
            created: '8 august, 7:27',
            title: 'Aanbod : Jessica',
            photos: ['https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/s~AAAOSwbtVZV2cx/$_86.JPG'],
        },
    ]
};

export const cases = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CASE':
            return action.filter;
        default:
            return state;
    }
};

