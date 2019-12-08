import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../layouts/basicLayout/layout";
import { toggleLoader } from "../../store/actions/loading";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import { createRequest } from "../../store/actions/contactActions";

class ContactUs extends Component {
  componentDidMount() {
    this.props.toggleLoader(false);
  }
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      name: "",
      email: "",
      subject: "",
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

    const newRequest = {
      text: this.state.text,
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject
    };

    this.props.createRequest(newRequest);
    this.setState({ text: "", name: "", email: "", subject: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <Layout>
        <div className="contact-area pt-85 pb-90">
          <div className="container">
            <div className="contact-info-wrap mb-50">
              <h3>contact info</h3>
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="single-contact-info text-center mb-30">
                    <i>
                      <FontAwesomeIcon icon="map-marker-alt" />
                    </i>
                    <h4>our address</h4>
                    <p>COMSTATS Sahiwal, Pakistan </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-contact-info extra-contact-info text-center mb-30">
                    <ul>
                      <li>
                        <i>
                          <FontAwesomeIcon icon="mobile-alt" />
                        </i>{" "}
                        090078601{" "}
                      </li>
                      <li>
                        <i>
                          <FontAwesomeIcon icon={["far", "envelope-open"]} />
                        </i>{" "}
                        <a href="#"> laptop_arsenal@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-contact-info text-center mb-30">
                    <i>
                      {" "}
                      <FontAwesomeIcon icon="clock" />
                    </i>
                    <h4>openning hour</h4>
                    <p>Monday - Friday. 8:30am - 4:30pm </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="get-in-touch-wrap">
              <h3>Get In Touch</h3>
              <div className="contact-from contact-shadow">
                <form id="contact-form" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                      />
                    </div>
                    <div className="col-lg-12">
                      <input
                        placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChange}
                        error={errors.subject}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextAreaFieldGroup
                        placeholder="Your Message"
                        name="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        error={errors.text}
                      />
                    </div>
                    <div className="col-lg-12">
                      <button className="submit" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messege"></p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(null, { toggleLoader, createRequest })(ContactUs);
