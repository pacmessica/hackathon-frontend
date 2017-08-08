import {request} from 'app/common/api';

function apiCall(params) {
    return request.get('api/search', {params})
        .then((response) => { // eslint-disable-line consistent-return
            if (response.ok) {
                return response.json();
            }
        }).then((json) => {
            if (json.error) {
                throw json.error;
            }
            return json.result;
        });
}

export function addCase(dispatch, query) : Event {
    return apiCall({ query })
        .then((caseDetail) => {
            dispatch({ type: 'ADD_CASE', payload: caseDetail });
            return caseDetail;
        }).catch((err) => {
            console.log('error', err);
        });
}
