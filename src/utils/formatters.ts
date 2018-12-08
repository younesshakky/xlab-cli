const MRqueryPattern: any = {
  source: "source_branch",
  target: "target_branch",
  assignee: "assignee_id",
  projectID: "id"
};
export const formatMRQuery = (query: any) => {
  const formatted: any = {};
  // ugly as fuck, but usefull
  for (let prop in query) {
    if (MRqueryPattern[prop]) {
      formatted[MRqueryPattern[prop]] = query[prop];
    } else {
      formatted[prop] = query[prop];
    }
  }

  return formatted;
};
