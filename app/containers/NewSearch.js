import React from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import { NewSearch as NewSearchComponent } from '../components/Dashboard/NewSearch';


class NewSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    onUpdate = (value) => {
        this.setState({value});
    }

    render() {
        return <NewSearchComponent value={this.state.value} onUpdate={this.onUpdate}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSearchContainer);
