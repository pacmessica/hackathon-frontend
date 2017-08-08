import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createReport } from 'app/actions/report';
import DashboardComponent from '../components/Dashboard/Dashboard';

class DashboardContainer extends React.Component {
    onCreateReport() {
        this.props.pushHistory('/report');
        // this.props.createReport.then(() => {
        //     this.props.goToReport;
        // });
    }

    onSelect(id) {
        this.props.pushHistory(`/case/${id}`);
    }

    render() {
        return (
            <DashboardComponent
                cases={this.props.cases}
                onSelect={this.onSelect.bind(this)}
                onCreateReport={this.onCreateReport.bind(this)}
            />
        );
    }
}

DashboardContainer.propTypes = {
    cases: PropTypes.object,
    pushHistory: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
    return {
        cases: state.cases,
        pushHistory: ownProps.history.push,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createReport: () => createReport(dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
