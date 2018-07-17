export const ADD_CRITERIA = "/src/actions/actions/ADD_CRITERIA";
export const REMOVE_CRITERIA = "/src/actions/actions/REMOVE_CRITERIA";

export function addCriteria( dispatch, item ) {

    dispatch( { type: ADD_CRITERIA, payload: item } );

}

export function removeCriteria( dispatch, item ) {

    dispatch( { type: REMOVE_CRITERIA, payload: item } );

}