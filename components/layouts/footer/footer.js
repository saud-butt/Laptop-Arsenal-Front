export default () => {
  return (
    <footer className="footer-area section-padding-2 bg-bluegray pt-20">
      <div className="copyright-3 text-center pb-20">
        <p>
          Copyright © <a href="#">Laptop Arsenal</a>
          {` `}
          {new Date().getFullYear()}. All Right Reserved
        </p>
      </div>
    </footer>
  );
};
