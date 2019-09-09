import React from "react";

import Specification from "./Specification";
import Reviews from "./Reviews";

const Description = ({ product }) => {
  return (
    <div className="description-review-wrapper pb-90">
      <div className="container">
        <div className="row">
          <div className="ml-auto mr-auto col-lg-10">
            <div className="dec-review-topbar nav mb-40">
              <a data-toggle="tab" href="#des-details1">
                Description
              </a>
              <a className="active" data-toggle="tab" href="#des-details2">
                Specification
              </a>
              <a data-toggle="tab" href="#des-details3">
                Reviews
              </a>
            </div>
            <div className="tab-content dec-review-bottom">
              <div id="des-details1" className="tab-pane">
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

              <Specification product={product} />
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
