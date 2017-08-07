// import PropTypes from 'prop-types';
import React from 'react';
import styles from './Dashboard.scss';
import {Link} from 'react-router-dom';

export const Dashboard = ({}) => {
    return (
        <div>
            <h1>Items</h1>
            <div className={styles.add}>
                <Link to={'/new'}>
                 +
                </Link>
            </div>
        </div>
    );
};

// Dashboard.propTypes = {
//     filter: PropTypes.string,
//     onFilter: PropTypes.func
// };
