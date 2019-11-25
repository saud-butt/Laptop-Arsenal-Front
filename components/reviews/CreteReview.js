import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReducer } from "../../store/actions/reviewActions";

class PostForm extends Component {
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

    const newReview = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    // this.props.addPost(newPost);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="get-in-touch-wrap">
        <h3 className="pt-20">Give your opinion about this product</h3>
        <div className="contact-from contact-shadow">
          <form id="contact-form" action="assets/mail.php" method="post">
            <div className="row">
              <div className="col-lg-12">
                <textarea name="message" placeholder="Your Thoughts"></textarea>
              </div>
              <div className="col-lg-12">
                <button className="submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <p className="form-messege"></p>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  // addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, null)(PostForm);
