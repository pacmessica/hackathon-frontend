import React from 'react';
import PropTypes from 'prop-types';
import styles from './Case.scss';
import { Post } from './Post';
import { Filters } from './Filters';

export const Case = ({ caseQuery, posts, filterCase }) => {
    return (
        <div className={styles.container}>
            <h1>Search Results</h1>
            <div className={styles.content}>
                <ul>
                    {posts.map((post) => <Post key={post.id} {...post} /> )}
                </ul>
                <Filters filterCase={filterCase} caseQuery={caseQuery} />
            </div>
        </div>
    );
};

Case.propTypes = {
    caseQuery: PropTypes.string,
    posts: PropTypes.array,
    filterCase: PropTypes.func,
};
