import React from 'react';
import PropTypes from 'prop-types';
import { Item as FormItem } from 'app/components/Form/Item';
import styles from './Filters.scss';

export class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            city: '',
        };
    }

    onUpdateField = (value, field) => {
        this.setState({[field.toLowerCase()]: value});
    }

    onSearch = () => {
        const { description, city } = this.state;
        this.props.filterCase({description, city}, this.props.caseQuery);
    }

    render() {
        return (
            <div className={styles.container}>
              <h2>Filters</h2>

              <FormItem label="Description" value={this.state.description} onUpdate={this.onUpdateField}/>
              <FormItem label="City" value={this.state.city} onUpdate={this.onUpdateField}/>
              <button onClick={this.onSearch}>Apply Filters</button>
            </div>
        );
    }
}

Filters.propTypes = {
    filterCase: PropTypes.func,
    caseQuery: PropTypes.string,
};

