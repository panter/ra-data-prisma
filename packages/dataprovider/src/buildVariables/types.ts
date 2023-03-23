import { IntrospectionResult, Resource } from "../constants/interfaces";
import { OurOptions } from "../types";

export type BuildVariablesContext = {
  introspectionResults: IntrospectionResult;
  options: OurOptions;
  resource: Resource;
};
