import {request} from 'app/common/api';

function apiCall(params) {
    return request.get('api/search', {params})
        .then((response) => {
            if (response.statusText === 'OK') {
                return response.data;
            }
            throw new Error('request failed');
        });
}

export function filterCase(dispatch, filters, query) {
    const params = {...filters, query: query};

    return apiCall(params)
        .then((posts) => {
            const id = query.replace(/\s/g, '');
            dispatch({ type: 'ADD_POSTS', payload: {posts}, id });
            return posts;
        }).catch((err) => {
            console.log('error', err);
        });
}

export function addCase(dispatch, query) {
    const params = {query};
    return apiCall(params)
        .then((posts) => {
            const id = query.replace(/\s/g, '');
            dispatch({ type: 'ADD_CASE', payload: {posts, query}, id });
            return posts;
        }).catch((err) => {
            console.log('error', err);
        });
}
