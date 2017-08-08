import React from 'react';
import PropTypes from 'prop-types';
import styles from './Report.scss';

export const Report = ({ report }) => {
    console.log('report', report);
    return (
        <div className={styles.container}>
            This is the report page
        </div>
    );
};

Report.propTypes = {
    report: PropTypes.object,
};
