import { connect } from 'react-redux';
import { addCase } from 'app/actions/cases';
import { Case as CaseComponent } from 'app/components/Case/Case';

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        posts: state.cases[id].posts
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
)(CaseComponent);
