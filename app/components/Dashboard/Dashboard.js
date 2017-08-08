import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.scss';
import {Link} from 'react-router-dom';

export const Dashboard = ({cases, onCreateReport, onSelect}) => {
    return (
        <div>
            <h1>Searches!!</h1>
            <div className={styles.add}>
                <Link to={'/new'}>
                 +
                </Link>
            </div>
            {Object.keys(cases).map((k) =>
                <div className={styles.item} key={k} onClick={() => onSelect(k)}>
                    <div className={styles.tag}>{cases[k].query}</div>
                    <div className={styles.reference}>{cases[k].posts.length}</div>
                </div>
            )}
            <div className={styles.reportLink} onClick={onCreateReport}>Create Suspicious Activity Report</div>
        </div>
    );
};

Dashboard.propTypes = {
    cases: PropTypes.object.isRequired,
    onCreateReport: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default Dashboard;
