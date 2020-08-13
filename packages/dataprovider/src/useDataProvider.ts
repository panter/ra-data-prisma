import buildDataProvider from "./buildDataProvider";
import { useEffect, useState } from "react";
import { Options } from "./types";

const useDataProvider = (options: Options) => {
  const [dataProvider, setDataProvider] = useState();

  useEffect(() => {
    buildDataProvider(options).then((p) => {
      setDataProvider(() => p);
    });
  }, []);

  return dataProvider;
};

export default useDataProvider;
