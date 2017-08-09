import React from 'react';
import PropTypes from 'prop-types';
import styles from './Case.scss';
import { Post } from './Post';
import { Filters } from './Filters';

// <p>Set minimal content{"'"}s suspicious score</p>
// <div className={styles.score}slider">
//     <input type="range">
// </div>


export const Case = ({ caseQuery, posts, filterCase }) => {
    console.log({caseQuery, posts, filterCase });
    return (
        <div className={styles.container}>
            <h1>Suspicious Advertisements</h1>
            <div className={styles.header}>
             <p>Filter on...</p>
             <Filters filterCase={filterCase} caseQuery={caseQuery} />
            </div>
            {posts.map((post) => <Post key={post.id} {...post} onClick={() => console.log('clicked!')}/> )}
         </div>

    );
};

Case.propTypes = {
    caseQuery: PropTypes.string,
    posts: PropTypes.array,
    filterCase: PropTypes.func,
};
