import { FRESH_ARTICLES } from "../actions/actions";

export default function( state = {}, action ) {

    const { type, payload } = action;
    switch( type ) {

        case FRESH_ARTICLES:
            return { ...state, ...payload };
        default:
            return state;
    }

}
