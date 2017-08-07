
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import { Dashboard as DashboardComponent } from '../components/Dashboard/Dashboard';

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
)(DashboardComponent);
