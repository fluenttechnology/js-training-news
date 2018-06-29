export default function( state = [ "fish" ], action ) {

    const { type, payload } = action;
    switch( type ) {

        case "ADD_CRITERIA":
            if ( state.includes( payload ) ) return state;
            return [ ...state, payload ];
        case "REMOVE_CRITERIA":
            return state.filter( x => x !== payload );
        default:
            return state;
    }

}
