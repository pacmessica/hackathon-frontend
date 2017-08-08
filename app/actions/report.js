import { request } from 'app/common/api';

function apiCall() {
    return request.get('api/report')
        .then((response) => {
            if (response.statusText === 'OK') {
                return response.data;
            }
            throw new Error('error getting report');
        });
}

export function createReport(dispatch) { // eslint-disable-line
    return apiCall()
        .then((report) => {
            dispatch({ type: 'ADD_REPORT', payload: report });
            return report;
        }).catch((err) => {
            console.log('error', err);
        });
}
