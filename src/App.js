import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { fetchArticles } from "./api-agents/news";

const Headline = ( { data } ) => <section className="headline">

  <h3>{data.title}</h3>
  <p>{data.description}</p>
  <a href={data.url}>By {data.source} ({data.url})</a>

</section>;


function formatArticle( data ) {

  const description = data.description;
  const title = data.title;
  const url = data.url;
  const source = data.source.name;

  return { title, description, url, source };

}

function analyzeArticles( data, ...keywords ) {

    function containsKeywords( article ) {

        return keywords.find( keyword => article.description.includes( keyword ) );

    }

    return data.reduce(

      function( ret, article ) {

          const hasKeyword = containsKeywords( article );
          return {

            ...ret,
            ( hasKeyword
              ? { top: [ ...ret.top, article ] }
              : { other: [ ...ret.other ], article } )


          };

      },
      { top: [], other: [] }

    )

}

class App extends Component {

  constructor() {

    super();
    this.state = { top: [], other: [] };
    this.refresh();

  }

  refresh() {

    // TODO: change this to use chained "then" functions using fat-arrows instead of normal "function"
    fetchArticles()
      .then( data => data.articles )
      .then( articles => articles.map( formatArticle ) )
      .then( headlines => this.setState( analyzeArticles( headlines, "ISP", "Asia", "Disrupt" ) ) );

  }

  render() {

    return (

      <div className="App">

        <h3>Top news</h3>
        {this.state.top.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

        <h3>Other news</h3>
        {this.state.other.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

      </div>

    );

  }

}

export default App;
