import { connect } from 'react-redux';
import { filterTable } from '../actions';
import { Case as CaseComponent } from '../components/Case/Case';

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
)(CaseComponent);
