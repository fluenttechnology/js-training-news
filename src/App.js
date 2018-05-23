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

  // TODO: use const instead of var
  var description = data.description;
  var title = data.title;
  var url = data.url;
  var source = data.source.name;

  // TODO: use shorthand property syntax (eliminate repetition)
  return {
    title: title,
    description: description,
    url: url,
    source: source
  };

}

class App extends Component {

  constructor() {

    super();
    this.state = { headlines: [] };
    this.refresh();

  }

  refresh() {

    // TODO: change this to use chained "then" functions using fat-arrows instead of normal "function"
    fetchArticles().then( function( data ) {

      var articles = data.articles;
      var formatted = [];
      for( var i = 0; i < articles.length; i++ ) {

        var toFormat = articles[ i ];
        var formattedArticle = formatArticle( toFormat );
        formatted.push( formattedArticle );

      }
      this.setState( { headlines: formatted } );

    }.bind( this ) );

  }

  render() {
    return (
      <div className="App">

        <h3>Some news</h3>
        {this.state.headlines.map( ( headline, i ) => <Headline data={headline} key={i} /> )}
      </div>
    );
  }
}

export default App;
