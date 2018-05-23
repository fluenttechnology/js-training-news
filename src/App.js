import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { fetchArticles } from "./api-agents/news";

const Headline = ( { data } ) => <section className="headline">

  <h3>{ data.title}</h3>
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
class App extends Component {

  constructor() {

    super();
    this.state = { headlines: [] };
    this.refresh();

  }

  refresh() {

    fetchArticles()
      .then( data => data.articles )
      .then( articles => articles.map( articleData => formatArticle( articleData ) ) )
      .then( headlines => this.setState( { headlines } ) );

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
