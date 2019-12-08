import { PropTypes } from "prop-types";

import Style from "./AnimatedLogo.scss";

const AnimatedLogo = ({ theme }) => (
  <div className={Style[theme]}>
    <img src="/static/images/logo.png" alt="Loading" className={Style.logo} />
    <div className={Style.loadingText} />
  </div>
);

AnimatedLogo.propTypes = {
  theme: PropTypes.string.isRequired
};

export default AnimatedLogo;
