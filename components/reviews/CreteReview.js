import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createReview } from "../../store/actions/reviewActions";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { product } = this.props;
    const newReview = {
      text: this.state.text,
      author: user.name,
      avatar: user.avatar,
      id: product._id,
      model: product.model,
      cover: product.cover
    };

    this.props.createReview(newReview);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="get-in-touch-wrap">
        <h3 className="pt-20">Give your opinion about this product</h3>
        <div className="contact-from contact-shadow">
          <form id="contact-form" onSubmit={this.onSubmit}>
            <TextAreaFieldGroup
              placeholder="Your Thoughts"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
            />

            <div className="col-lg-12">
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
    );
  }
}

CreateReview.propTypes = {
  CreateReview: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  product: state.products.product
});

export default connect(mapStateToProps, { createReview })(CreateReview);
