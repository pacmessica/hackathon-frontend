import React, { PropTypes } from 'react';
import styles from './Dashboard.scss';
import {Link} from 'react-router-dom';

export const Dashboard = ({cases, onSelect}) => {
    return (
        <div>
            <h1>Searches</h1>
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
        </div>
    );
};

Dashboard.propTypes = {
    cases: PropTypes.object,
    onSelect: PropTypes.func,
};
