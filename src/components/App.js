import React, { Component } from 'react';
import './App.css';

import CriteriaList from "../containers/CriteriaList";
import CriteriaEditor from "../containers/CriteriaEditor";

const Headline = ( { data } ) => <section className="headline">

  <h3>{data.title}</h3>
  <p>{data.description}</p>
  <a href={data.url}>By {data.source} ({data.url})</a>

</section>;

class App extends Component {

  constructor() {

    super();
    this.state = { top: [], others: [] };

  }

  refresh() {

    const { fetchArticles } = this.props;
    fetchArticles( this.props.criteria );

  }

  render() {

    const { top, others } = this.props.articles;
    return (

      <div className="App">

        <CriteriaEditor />
        <CriteriaList />

        <button onClick={() => this.refresh()}>Refresh</button>

        <h3>Top news</h3>
        {top && top.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

        <h3>Other news</h3>
        {others && others.map( ( headline, i ) => <Headline data={headline} key={i} /> )}

      </div>

    );

  }

}

export default App;
