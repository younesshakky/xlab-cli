export const formatQuery = (pattern: any, query: any) => {
  const formatted: any = {};
  // ugly as fuck, but usefull
  for (let prop in query) {
    if (pattern[prop]) {
      formatted[pattern[prop]] = query[prop];
    } else {
      formatted[prop] = query[prop];
    }
  }

  return formatted;
};
