export default () => {
  return (
    <footer className="footer-area section-padding-2 bg-bluegray pt-20">
      <div className="container-fluid">
        <div className="footer-top pb-40">
          <div className="row">
            <div className="col-lg-3 col-md-8 col-12 col-sm-12">
              <div className="footer-widget mb-30">
                <a href="#">
                  <img src="../../../static/images/logo.png" alt="logo" />
                </a>
                <div className="footer-about">
                  <p>
                    Laptop Arsenal is a best place to find laptops for home,
                    work or for entertainment.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-sm-6">
              <div className="footer-widget mb-30 ml-55">
                <div className="footer-title-3">
                  <h3>Laptop Arsenal</h3>
                </div>
                <div className="footer-list-3">
                  <ul>
                    <li>
                      <a href="/products">Products</a>
                    </li>
                    <li>
                      <a href="/auth/register">Register</a>
                    </li>
                    <li>
                      <a href="/reviews">Reviews</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-6">
              <div className="footer-widget mb-30 footer-ngtv-mrg1">
                <div className="footer-title-3">
                  <h3>Products</h3>
                </div>
                <div className="footer-list-3">
                  <ul>
                    <li>
                      <a href="/products">List</a>
                    </li>
                    <li>
                      <a href="/products/show">Details</a>
                    </li>
                    <li>
                      <a href="/products/compare">Compare</a>
                    </li>
                    <li>
                      <a href="/products/modify">Modify</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-6">
              <div className="footer-widget mb-30 footer-ngtv-mrg1">
                <div className="footer-title-3">
                  <h3>Register</h3>
                </div>
                <div className="footer-list-3">
                  <ul>
                    <li>
                      <a href="/auth/register">Login</a>
                    </li>
                    <li>
                      <a href="/user/wishlist">Wishlist</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6 col-sm-6">
              <div className="footer-widget mb-30 footer-ngtv-mrg1">
                <div className="footer-title-3">
                  <h3>Reviews</h3>
                </div>
                <div className="footer-list-3">
                  <ul>
                    <li>
                      <a href="/reviews/review">Review</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-40 border-top-1">
          <div className="copyright-3 text-center pb-20">
            <p>
              Copyright © <a href="#">Laptop Arsenal</a>
              {` `}
              {new Date().getFullYear()}. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
