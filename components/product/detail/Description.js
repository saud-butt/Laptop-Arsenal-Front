import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import Specification from "./Specification";
import Reviews from "./Reviews";

const Description = ({ product }) => {
  return (
    <div className="description-review-wrapper pb-90">
      <div className="container">
        <div className="row">
          <div className="ml-auto mr-auto col-lg-10">
            {/* <div className="dec-review-topbar nav mb-40">
              <ul class="nav nav-tabs">
                <li>
                  <a data-toggle="tab" href="#des-details1">
                    Description
                  </a>
                </li>
                <li>
                  <a className="active" data-toggle="tab" href="#des-details2">
                    Specification
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#des-details3">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content dec-review-bottom">
              <div id="des-details1" className="tab-pane fade">
                <div className="description-wrap">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. The point of using Lorem Ipsum is that
                    it has a more-or-less normal distribution of letters, Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
                  </p>
                </div>
              </div>
              <div id="des-details2" class="tab-pane in active">
                <p>
                  <Specification product={product} />
                </p>
              </div>
              <div id="des-details3" className="tab-pane fade">
                <p>
                  <Reviews />
                </p>
              </div>
            </div> */}
            <div className="tab-content dec-review-bottom">
              <Tabs
                defaultActiveKey="specifications"
                id="specifications"
                className="dec-review-topbar nav mb-40"
              >
                <Tab
                  eventKey="description"
                  title="Description"
                  className="description-wrap"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text. The point of using Lorem Ipsum is that
                    it has a more-or-less normal distribution of letters, Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters,
                  </p>
                </Tab>
                <Tab
                  eventKey="specifications"
                  title="Specifications"
                  id="des-details2"
                  class="tab-pane"
                >
                  <Specification product={product} />
                </Tab>

                <Tab eventKey="review" title="Review" id="des-details3">
                  <Reviews />
                </Tab>
              </Tabs>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
