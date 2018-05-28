const contains = ( text, ...terms ) => !!terms.find( term => text.includes( term ) );

export function groupHeadlines( headlines ) {

  const grouped = headlines.reduce(

    ( grouping, headline ) => contains( headline.description, "ISP", "Asia", "Disrupt" )
      ? { ...grouping, top: [ ...grouping.top, headline ] }
      : { ...grouping, others: [ ...grouping.others, headline ] },
    { top: [], others: [] }

  )
  return grouped;

}