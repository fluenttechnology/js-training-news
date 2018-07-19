import { connect } from 'react-redux'
import App from "../components/App";
import { fetchArticles } from "../actions/actions";

const mapStateToProps = state => ( {

    criteria: state.criteria,
    articles: state.articles

} );
const mapDispatchToProps = dispatch => ( {

    fetchArticles: criteria => fetchArticles( dispatch, criteria )

} );
export default connect( mapStateToProps, mapDispatchToProps )( App );