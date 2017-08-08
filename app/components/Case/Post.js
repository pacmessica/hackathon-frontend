import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.scss';

export const Post = ({ title, photos, description, city, created }) => {
    const src = photos[0];
    return (
        <li className={styles.item}>
            <div className={styles.textbox}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.details}>
                    <div>€ 475,00</div>
                    <div>{created}</div>
                    <div>{city}</div>
                </div>
            </div>
            <div className={styles.photo} style={{backgroundImage: `url(${src})`}} />
        </li>
    );
};

Post.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    city: PropTypes.string,
    created: PropTypes.string,
    photos: PropTypes.array,
};
