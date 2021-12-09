import React from "react";
import images from "../../images";
import Frame from "../Frame";

function Mobile() {
  return (
    <div className="mobile">
      <img src={images.shared.mobile} alt="mobile" className="mobile-overlay" />
      <Frame id="mobile-frame">
        <div className="mobile-content">
          <p>Mobile Website</p>
          <img src={images.shared.phone} alt="phone" className="mobile-phone" />
          <div className="mobile-content-bottom">
            <h4>COMING</h4>
            <h3>SOON</h3>
          </div>
        </div>
      </Frame>
    </div>
  );
}

export default Mobile;
