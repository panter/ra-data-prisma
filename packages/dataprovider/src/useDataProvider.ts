import buildGraphQLProvider from "./";
import { useEffect, useState } from "react";

export default () => {
  const [dataProvider, setDataProvider] = useState();

  useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: "/api/graphql" } as any,
    }).then((p) => {
      setDataProvider(() => p);
    });
  }, []);

  return dataProvider;
};
