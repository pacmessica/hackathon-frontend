import React from 'react';
// import React, { PropTypes } from 'react';
import {FIELDS} from 'app/common/constants';
import { DropDown } from 'app/components/Menus/Dropdown';
// import styles from './Filters.scss';

export class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            filters: [],
        };
    }

    onChange = (filter) => {
        const {filters} = this.state;
        if (!filters.includes(filter)) {
            this.setState({
                filters: filters.concat([filter])
            });
        }
    }

    render() {
        return (
            <div>
              <h2>Filters</h2>
              {this.state.filters.map((filter) =>
                  <div>{filter}</div>
              )}
              <DropDown
                label="Add New Filter"
                options={FIELDS}
                onChange={this.onChange}
              />
            </div>
        );
    }
}

Filters.propTypes = {
    // tags: PropTypes.arrayOf(PropTypes.string),
    // onChange: PropTypes.func,
};

