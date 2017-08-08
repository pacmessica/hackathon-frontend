import { connect } from 'react-redux';
import { Report as ReportComponent } from 'app/components/Report/Report';

const mapStateToProps = (state) => {
    return {
        report: state.report
    };
};

export default connect(
    mapStateToProps,
    {}
)(ReportComponent);
