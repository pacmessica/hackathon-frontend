import React from 'react';
import PropTypes from 'prop-types';
import styles from './Case.scss';
import { Post } from './Post';
import { Filters } from './Filters';

export const Case = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h1>Search Results</h1>
            <Filters />
            <ul>
                {posts.map((post) => <Post key={post.id} {...post} /> )}
            </ul>
        </div>
    );
};

Case.propTypes = {
    posts: PropTypes.array,
};
