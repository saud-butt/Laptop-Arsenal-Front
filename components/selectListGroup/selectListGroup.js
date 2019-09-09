import React from "react";
import PropTypes from "prop-types";

const SelectListGroup = ({ name, value, onChange, options }) => {
  const selectOptions = options.map(options => (
    <option key={options.label} value={options.value}>
      {options.label}
    </option>
  ));

  return (
    <select name={name} value={value} onChange={onChange}>
      {selectOptions}
    </select>
  );
};

SelectListGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
