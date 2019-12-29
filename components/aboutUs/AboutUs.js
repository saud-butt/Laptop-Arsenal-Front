import React, { Component } from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { toggleLoader } from "../../store/actions/loading";
import Layout from "../layouts/basicLayout/layout";

class AboutUs extends Component {
  componentDidMount() {
    this.props.toggleLoader(false);
    $(document).ready(function() {
      $("html, body").animate(
        {
          scrollTop: $(".team-area").offset().top
        },
        "slow"
      );
    });
  }
  render() {
    return (
      <Layout>
        <div className="team-area pt-60 pb-60">
          <div className="container">
            <div className="section-title-2 text-center">
              <h2>Team Leader</h2>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-6 ">
                <div className="team-wrapper mb-30">
                  <div className="team-img">
                    <a href="#">
                      <img
                        src="../../static/images/sirTaimoor.png"
                        alt="Taimoor"
                      />
                    </a>
                  </div>
                  <div className="team-content text-center">
                    <h4>Sir Taimoor Sajjad</h4>
                    <span>Supervisor </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-title-2 text-center">
              <h2>Team Members</h2>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                  <div className="team-img">
                    <a href="#">
                      <img src="../../static/images/adi.jpeg" alt="Adnan" />
                    </a>
                  </div>
                  <div className="team-content text-center">
                    <h4>Adnan Hassan</h4>
                    <span>Developer </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                  <div className="team-img">
                    <a href="#">
                      <img src="../../static/images/saud.jpeg" alt="Saud" />
                    </a>
                  </div>
                  <div className="team-content text-center">
                    <h4>Saud Butt</h4>
                    <span>Developer </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                  <div className="team-img">
                    <a href="#">
                      <img src="../../static/images/sameed.jpeg" alt="Sameed" />
                    </a>
                  </div>
                  <div className="team-content text-center">
                    <h4>Sameed Ijaz</h4>
                    <span>Developer </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(null, { toggleLoader })(AboutUs);
