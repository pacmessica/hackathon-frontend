import React from 'react';
import PropTypes from 'prop-types';
// import { Item as FormItem } from 'app/components/Form/Item';
import styles from './Filters.scss';

export class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            description: '',
            city: '',
        };
    }

    onUpdate = (value, field) => {
        this.setState({[field]: value});
    }

    onSearch = () => {
        const { description, city } = this.state;
        this.props.filterCase({description, city}, this.props.caseQuery);
    }

    render() {
        return (
            <div>
                <table className={styles.filters}>
                    <tbody>
                        <tr>
                            <td className={styles.score}><input type="text" placeholder="Description" value={this.state.descripiton}
                            onChange={(event) => this.onUpdate(event.target.value, 'description')}/></td>
                            <td className={styles.score}><input type="text" placeholder="Location" value={this.state.city}
                            onChange={(event) => this.onUpdate(event.target.value, 'city')}/></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.onSearch}>Apply Filters</button>
            </div>
        );
    }
}

Filters.propTypes = {
    filterCase: PropTypes.func,
    caseQuery: PropTypes.string,
};

