import React, { Component } from 'react';
import './App.css';

import NewsAgent from "../api-agents/news";
import { fetchApiKey } from "../config";
import { groupHeadlines } from "../logic/articles";
import CriteriaList from "../containers/CriteriaList";
import CriteriaEditor from "../containers/CriteriaEditor";

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
    setTimeout( this.refresh() );

  }

  componentWillReceiveProps() {

    setTimeout( this.refresh() );

  }
  refresh() {

    this.newsAgent.fetchArticles( "everything", 50 )
      .then( data => data.articles )
      .then( articles => articles.map( formatArticle ) )
      .then( headlines => this.setState( groupHeadlines( headlines, this.props.criteria ) ) );

  }


  render() {

    return (

      <div className="App">

        <CriteriaEditor />
        <CriteriaList />

        <h3>Top news</h3>
        {this.state.top.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

        <h3>Other news</h3>
        {this.state.others.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

      </div>

    );

  }

}

export default App;
