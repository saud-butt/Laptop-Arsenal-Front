import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import { PropTypes } from "prop-types";
import * as _ from "lodash";

class ReactSelect extends Component {
  state = {
    selectedOption: null
  };

  changeHandler = selectedOption => {
    this.setState({ selectedOption: selectedOption });
    this.props.onChange(selectedOption, this.props.storeKey);
  };

  filterOptions = inputValue => {
    return this.props.searchedOptions.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  liberateOptions = (inputValue, callback) => {
    this.props.liberateOptions(inputValue);
    console.log(inputValue);
    console.log(this.props.searchedOptions);
    callback(this.filterOptions(inputValue));
  };

  render() {
    const { placeholder, defaultValue } = this.props;
    let { selectedOption } = this.state;
    if (_.isEmpty(selectedOption) && !_.isEmpty(defaultValue)) {
      selectedOption = defaultValue;
    }
    return (
      <>
        <AsyncSelect
          cacheOptions
          onChange={this.changeHandler}
          loadOptions={this.liberateOptions}
          value={selectedOption}
          placeholder={placeholder}
        />
      </>
    );
  }
}

ReactSelect.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.object,
  liberateOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ReactSelect;
