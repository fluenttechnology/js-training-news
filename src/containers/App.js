import { connect } from 'react-redux'
import App from "../components/App";

const mapStateToProps = state => ( {

    criteria: state.criteria

} );
const mapDispatchToProps = () => null;
export default connect( mapStateToProps, mapDispatchToProps )( App );