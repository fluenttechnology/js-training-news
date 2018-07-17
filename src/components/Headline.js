import React from "react";
import "./Headline.css";

export default ( { data } ) => <section className="headline">

  <h3>{data.title}</h3>
  <p>{data.description}</p>
  <a href={data.url}>By {data.source} ({data.url})</a>

</section>;
