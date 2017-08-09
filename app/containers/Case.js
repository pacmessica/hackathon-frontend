import { connect } from 'react-redux';
import { filterCase } from 'app/actions/cases';
import { Case as CaseComponent } from 'app/components/Case/Case';

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        caseQuery: state.cases[id].query,
        posts: state.cases[id].posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterCase: (query, id) => filterCase(dispatch, query, id)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CaseComponent);
