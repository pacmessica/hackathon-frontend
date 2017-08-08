import React from 'react';
import PropTypes from 'prop-types';
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

    onSubmit = () => {
        this.props.pushHistory('/case');
    }

    render() {
        return (
            <NewSearchComponent
                value={this.state.value}
                onUpdate={this.onUpdate}
                onSubmit={this.onSubmit}
            />
        );
    }
}

NewSearchContainer.propTypes = {
    pushHistory: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
    return {
        filter: state.filter,
        pushHistory: ownProps.history.push,
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
