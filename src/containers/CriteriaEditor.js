import { connect } from 'react-redux'
import { addCriteria } from "../actions/actions";
import CriteriaEditor from "../components/CriteriaEditor";

const mapStateToProps = () => null;

const mapDispatchToProps = dispatch => ( {

    addCriteria: item => addCriteria( dispatch, item )

} );
export default connect( mapStateToProps, mapDispatchToProps )( CriteriaEditor );