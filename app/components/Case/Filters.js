import React from 'react';
import { Item as FormItem } from 'app/components/Form/Item';
import styles from './Filters.scss';

export class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            location: '',
        };
    }

    // onChange = (filter) => {
    //     const {filters} = this.state;
    //     if (!filters.includes(filter)) {
    //         this.setState({
    //             filters: filters.concat([filter])
    //         });
    //     }
    // }

    onUpdateField = (value, field) => {
        console.log({value, field});
        this.setState({[field]: value});
        console.log('this.state', this.state);
    }

    render() {
        return (
            <div className={styles.container}>
              <h2>Filters</h2>

              <FormItem label="Description" value={this.state.description} onUpdate={this.onUpdateField}/>
              <FormItem label="Location" value={this.state.location} onUpdate={this.onUpdateField}/>

            </div>
        );
    }
}

Filters.propTypes = {
    // tags: PropTypes.arrayOf(PropTypes.string),
    // onChange: PropTypes.func,
};

