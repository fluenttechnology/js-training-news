import React, { Component } from "react";

class CriteriaEditor extends Component {

    constructor() {

        super();
        this.state = { value: "" };

    }

    handleChange() {

        this.setState( { value: this.input.value } );

    }

    handleSubmit( e ) {

        e.preventDefault();
        const { handleAddCriteria } = this.props;
        const { value } = this.state;
        if ( value === null ) return;
        handleAddCriteria( value );
        this.setState( { value: "" } );

    }

    render() {

        return <form className="criteria-editor" onSubmit={e => this.handleSubmit( e )}>

            <input type="text"
                placeholder="Enter a new term"
                value={this.state.value}
                ref={x => this.input = x}
                onChange={() => this.handleChange()} />
            <button>Add</button>

        </form>;

    }
}

export default CriteriaEditor;