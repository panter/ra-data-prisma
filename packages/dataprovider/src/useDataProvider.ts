import buildDataProvider, { defaultOurOptions } from "./buildDataProvider";
import { useEffect, useState } from "react";
import { DataProviderOptions } from "./types";
import { DataProvider } from "react-admin";

const useDataProvider = (options: DataProviderOptions) => {
  const [dataProvider, setDataProvider] = useState<DataProvider>();

  useEffect(() => {
    buildDataProvider({ ...defaultOurOptions, ...options }).then((p) => {
      setDataProvider(() => p);
    });
  }, []);

  return dataProvider;
};

export default useDataProvider;
