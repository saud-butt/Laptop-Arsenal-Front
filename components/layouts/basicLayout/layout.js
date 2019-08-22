import Footer from "../footer/footer";
import Header from "../header/header";
import Style from "./layout.scss";

export default ({ children, title = "This is the default title" }) => (
  <div className="main-wrapper">
    <Header />
    <div className={`breadcrumb-area bg-img ${Style.bgImage}`}>
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>shop page</h2>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">shop </li>
          </ul>
        </div>
      </div>
    </div>
    {children}

    <Footer />
  </div>
);
