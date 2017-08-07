import PropTypes from 'prop-types';
import React from 'react';
import styles from './NewSearch.scss';

export const NewSearch = ({value, onUpdate}) => {
    return (
        <div className={styles.container}>
            <h1>Search Item</h1>
            <div className={styles.box}>
                <div className={styles.field}>
                  <input
                    type="text"
                    value={value}
                    onChange={(event) => onUpdate(event.target.value)}
                  />
                </div>
                <button>Search</button>
            </div>
        </div>
    );
};

NewSearch.propTypes = {
    value: PropTypes.string,
    onUpdate: PropTypes.func,
};
