import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewsAgent from "./api-agents/news";
import { fetchApiKey } from "./config";
import { groupHeadlines } from "./logic/articles";
import CriteriaList from "./CriteriaList";
import CriteriaEditor from "./CriteriaEditor";

import { criteria } from "./logic/top-criteria";

const Headline = ( { data } ) => <section className="headline">

  <h3>{data.title}</h3>
  <p>{data.description}</p>
  <a href={data.url}>By {data.source} ({data.url})</a>

</section>;


function formatArticle( data ) {

  const { description, title, url } = data;
  const source = data.source.name;
  return { title, description, url, source };

}

class App extends Component {

  constructor() {

    super();
    this.state = { top: [], others: [] };
    this.newsAgent = new NewsAgent( fetchApiKey() );
    this.refresh();

  }

  refresh() {

    this.newsAgent.fetchArticles( "everything", 50 )
      .then( data => data.articles )
      .then( articles => articles.map( formatArticle ) )
      .then( headlines => this.setState( groupHeadlines( headlines ) ) );

  }

  removeCriteria( item ) {

    if ( !criteria.includes( item ) ) return;
    criteria.splice( criteria.indexOf( item ), 1 );
    this.refresh();

  }

  addCriteria( item ) {

    if ( criteria.includes( item ) ) return;
    criteria.push( item );
    this.refresh();

  }

  render() {

    return (

      <div className="App">

        <CriteriaEditor handleAddCriteria={item => this.addCriteria( item )} />
        <CriteriaList handleRemoveCriteria={item => this.removeCriteria( item )} />

        <h3>Top news</h3>
        {this.state.top.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

        <h3>Other news</h3>
        {this.state.others.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

      </div>

    );

  }

}

export default App;
