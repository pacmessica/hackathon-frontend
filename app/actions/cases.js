import {request} from 'app/common/api';

function apiCall(query) {
    const params = {query};

    return request.get('api/search', {params})
        .then((response) => {
            if (response.statusText === 'OK') {
                return response.data;
            }
            throw new Error('request failed');
        });
}

export function addCase(dispatch, query) : Event {
    return apiCall(query)
        .then((posts) => {
            const id = query.replace(/\s/g, '');
            dispatch({ type: 'ADD_CASE', payload: posts, id });
            return posts;
        }).catch((err) => {
            console.log('error', err);
        });
}
