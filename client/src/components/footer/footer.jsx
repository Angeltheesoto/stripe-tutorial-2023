import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <hr />
      Copyright &copy; {year} | stripe_tutorial. All Rights Reserved.{" "}
    </footer>
  );
};

export default Footer;
