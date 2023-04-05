import CustomStore from "devextreme/data/custom_store";

function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const createQuery = (collectionName: string,idField:string="_id") => {
  const customDataSource = new CustomStore({
    key: idField,
    load: (loadOptions: any) => {
      let url = `${process.env.REACT_APP_adp_api_url}/query`;
      const query = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection: collectionName,
          loadOptions: loadOptions,
        }),
      });

      return query
        .then(handleErrors)
        .then((response) => response.json())
        .then((response) => {
          return {
            data: response.data,
            totalCount: response.totalCount,
            summary: response.summary,
            groupCount: response.groupCount,
          };
        })
        .catch(() => {
          throw "Network error";
        });
    },
  });

  return customDataSource;
};
