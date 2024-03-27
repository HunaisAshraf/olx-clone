import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 border-t-2 pt-4">
      <div className="flex justify-evenly items-start bg-white">
        <div>
          <div>
            <p className="text-xl font-bold">POPULAR LOCATIONS</p>
          </div>
          <div className="text-sm">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p className="text-xl font-bold">ABOUT US</p>
          </div>
          <div className="text-sm">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p className="text-xl font-bold">OLX</p>
          </div>
          <div className="text-sm">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer mt-3 bg-green-950 text-white text-sm text-center py-2">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  );
};

export default Footer;
