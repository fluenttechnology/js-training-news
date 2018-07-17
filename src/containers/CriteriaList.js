import { connect } from 'react-redux'
import { removeCriteria } from "../actions/actions";
import CriteriaList from "../components/CriteriaList";

const mapStateToProps = state => ( {

    criteria: state.criteria

} );
const mapDispatchToProps = dispatch => ( {

    removeCriteria: item => removeCriteria( dispatch, item )

} );
export default connect( mapStateToProps, mapDispatchToProps )( CriteriaList );