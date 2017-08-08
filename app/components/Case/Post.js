import React from 'react';
import PropTypes from 'prop-types';
import styles from './Case.scss';

export const Post = ({ title, photos }) => {
    const src = photos[0];
    return (
        <li className={styles.item}>
            <div className={styles.textbox}>{title}</div>
            <div className={styles.photo} style={{backgroundImage: `url(${src})`}} />
        </li>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    photos: PropTypes.array,
};
