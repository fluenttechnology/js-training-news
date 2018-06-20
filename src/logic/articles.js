import { criteria } from "./top-criteria";

const contains = ( text, terms ) => !!terms.find( term => text.toLowerCase().includes( term.toLowerCase() ) );

export function groupHeadlines( headlines ) {

  const grouped = headlines.reduce(

    ( grouping, headline ) => contains( headline.description, criteria )
      ? { ...grouping, top: [ ...grouping.top, headline ] }
      : { ...grouping, others: [ ...grouping.others, headline ] },
    { top: [], others: [] }

  )
  return grouped;

}