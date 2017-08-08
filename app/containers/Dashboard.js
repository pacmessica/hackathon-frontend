
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import { Dashboard as DashboardComponent } from '../components/Dashboard/Dashboard';

const mapStateToProps = (state, ownProps) => {
    return {
        cases: state.cases,
        onSelect: (id) => ownProps.history.push(`/case/${id}`),
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
)(DashboardComponent);
