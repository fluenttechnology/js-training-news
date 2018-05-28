export function fetchArticles( newsType, pageSize ) {

    return fetch( `https://newsapi.org/v2/${newsType}?pageSize=${pageSize}&sources=techcrunch&apiKey=1f7897c973954687a43fc232d6ef044a` )
        .then( response => response.json() );

}
