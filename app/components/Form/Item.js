import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.scss';

export const Item = ({ label, value, onUpdate }) => (
    <div className={styles.field}>
        <label>{label}</label>
        <input
        type="text"
        value={value}
        onChange={(event) => onUpdate(event.target.value, label)}
        />
    </div>
);

Item.propTypes = {
    onUpdate: PropTypes.func,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
};


