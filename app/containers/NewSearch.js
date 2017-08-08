import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCase } from 'app/actions/cases';
import { NewSearch as NewSearchComponent } from 'app/components/Dashboard/NewSearch';


class NewSearchContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
        };
    }

    onUpdate = (query) => {
        this.setState({query});
    }

    onSubmit = () => {
        const {query} = this.state;
        this.props.addCase(query).then(() => {
            const id = query.replace(/\s/g, '');
            this.props.pushHistory(`/case/${id}`);
        });
    }

    render() {
        return (
            <NewSearchComponent
                value={this.state.query}
                onUpdate={this.onUpdate}
                onSubmit={this.onSubmit}
            />
        );
    }
}

NewSearchContainer.propTypes = {
    pushHistory: PropTypes.func,
    addCase: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
    return {
        pushHistory: ownProps.history.push,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCase: query => addCase(dispatch, query)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewSearchContainer);
