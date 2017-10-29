import React from 'react';

const Footer = ({props}) => {
  let type;
  if (props.location.pathname.includes("manage")) {
    type='manage';
  } else {
    type='full';
  }
  return (
    <div className={`${type}-footer`}>
      <div className="footer-left">
        <h3>Shmetsy</h3>
        <p>Etsy? More like Shmetsy am I right?</p>
      </div>

      <div className="footer-right">
        <p>Terms of Use</p>
        <p>Privacy</p>
      </div>
    </div>
  )
};

export default Footer;
