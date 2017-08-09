import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.scss';

export const DropDown = ({ label, options, value, onChange }) => (
  <div className={styles.field}>
    <div className={styles.dropDown}>
      <label>{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {!value &&
          <option selected disabled="disabled">Select an option</option>
        }
        {options.map((option, index) =>
          <option key={index} value={option}>{option}</option>
        )}
      </select>
    </div>
  </div>
);

DropDown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

