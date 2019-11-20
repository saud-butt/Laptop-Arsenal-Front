import * as _ from "lodash";

const getSpecs = specItem =>
  specItem
    ? Object.keys(specItem).map((key, index) => (
        <li key={index}>
          <strong>{_.startCase(key)}</strong> : {specItem[key]}
        </li>
      ))
    : null;

export { getSpecs };
