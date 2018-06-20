const APIKEY = Symbol();

class NewsAgent {

    constructor( apiKey ) {

        this[ APIKEY ] = apiKey;

    }

    fetchArticles( newsType, pageSize ) {

        return fetch( `https://newsapi.org/v2/${newsType}?pageSize=${pageSize}&sources=techcrunch&apiKey=${this[ APIKEY ]}` )
            .then( response => response.json() );

    }

}

export default NewsAgent;
