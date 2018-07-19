import NewsAgent from "../api-agents/news";
import { fetchApiKey } from "../config";
import { groupHeadlines } from "../logic/articles";

export const ADD_CRITERIA = "/src/actions/actions/ADD_CRITERIA";
export const REMOVE_CRITERIA = "/src/actions/actions/REMOVE_CRITERIA";
export const FRESH_ARTICLES = "/src/actions/actions/FRESH_ARTICLES";

export function addCriteria( dispatch, item ) {

    dispatch( { type: ADD_CRITERIA, payload: item } );

}

export function removeCriteria( dispatch, item ) {

    dispatch( { type: REMOVE_CRITERIA, payload: item } );

}

const newsAgent = new NewsAgent( fetchApiKey() );

function formatArticle( data ) {

    const { description, title, url } = data;
    const source = data.source.name;
    return { title, description, url, source };

}

export function fetchArticles( dispatch, criteria ) {

    newsAgent.fetchArticles( "everything", 50 )
        .then( data => data.articles )
        .then( articles => articles.map( formatArticle ) )
        .then( formattedArticles => groupHeadlines( formattedArticles, criteria ) )
        .then( headlines => dispatch( {

            type: FRESH_ARTICLES,
            payload: {

                ...headlines,
                when: new Date()

            }

        } ) );

}