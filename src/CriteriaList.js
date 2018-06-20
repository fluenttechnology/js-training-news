import React from "react";
import { criteria } from "./logic/top-criteria";

import "./CriteriaList.css";

const CriteriaList = ( { handleRemoveCriteria } ) => <ul className="class-list">

    {criteria.map(( item, index ) => <li key={index}>

        <span>{item}</span>
        <button onClick={() => handleRemoveCriteria(item)} className="remove">x</button>

    </li>)}

</ul>;

export default CriteriaList;
