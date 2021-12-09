import React from "react";
import animations from "../../animations";
import images from "../../images";
import { useStore } from "../../store";

function Navbar() {
  const { activeScreen } = useStore();
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <img src={images.navbar.logo} alt="logo" className="navbar-logo" />

        {activeScreen === 0 && (
          <img
            src={images.navbar.date}
            alt="date"
            className={`${animations.fadeInRight} navbar-coming-soon animate__delay-0s`}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
