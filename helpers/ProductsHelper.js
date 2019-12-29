import * as _ from "lodash";

const getSpecs = specItem =>
  specItem
    ? Object.keys(specItem).map((key, index) => (
        <div key={index}>
          {_.startCase(key)} : {specItem[key]}
        </div>
      ))
    : null;

export { getSpecs };
