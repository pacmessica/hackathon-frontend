import React, { PropTypes } from 'react';
import styles from './Dashboard.scss';
import {Link} from 'react-router-dom';

export const Dashboard = ({cases}) => {
    return (
        <div>
            <h1>Searches</h1>
            <div className={styles.add}>
                <Link to={'/new'}>
                 +
                </Link>
            </div>
            {Object.values(cases).map(({query, posts}) =>
                <div className={styles.item} key={query}>
                    <div className={styles.tag}>{query}</div>
                    <div className={styles.reference}>{posts.length}</div>
                </div>
            )}
        </div>
    );
};

Dashboard.propTypes = {
    cases: PropTypes.object,
};
