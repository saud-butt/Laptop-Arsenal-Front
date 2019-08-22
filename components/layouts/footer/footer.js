export default () => {
  return (
    <footer class="footer-area bg-black-3 pt-100 section-padding-4">
      <div class="container-fluid">
        <div class="footer-top pb-60">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12 col-sm-6">
              <div class="footer-widget footer-contact-wrap-2 mb-40">
                <div class="footer-contact-content-2">
                  <h5>Contact Information:</h5>
                  <div class="footer-info-hm5">
                    <span>Phone</span>
                    <p>+92 334 0060808</p>
                  </div>
                  <div class="footer-info-hm5">
                    <span>Mail</span>
                    <p>
                      <a href="#">saudbutt45@gmail.com</a>
                    </p>
                  </div>
                  <div class="footer-social-hm5">
                    <span>Follow US</span>
                    <ul>
                      <li>
                        <a href="#">Facebok</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Linkedin</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom pt-20 pb-20 border-top-3">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="copyright-5">
                <p>
                  Copyright © <a href="#">Laptop Arsenal</a>
                  {` `}
                  {new Date().getFullYear()}. All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
