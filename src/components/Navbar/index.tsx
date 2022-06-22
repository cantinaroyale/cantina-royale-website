// import React from "react";
// import animations from "../../animations";
import images from "../../images";
import { socials } from "../../data";
import { useStore } from "../../store";

interface Props {
  showSoon?: boolean;
}

function Navbar({ showSoon }: Props) {
  const { selectScreen } = useStore();
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <button onClick={() => selectScreen(0)}>
          <img src={images.navbar.newLogo} alt="logo" className="navbar-logo" />
        </button>
        {showSoon ? (
          <a
            className="navbar-ido-btn"
            href="https://maiarlaunchpad.com/cantina-royale"
            target="_blank"
            rel="noreferrer"
          >
            <p>Join the IDO</p>
          </a>
        ) : (
          // <img
          //   src={images.navbar.date}
          //   alt="date"
          //   className={`${animations.fadeInRight} navbar-coming-soon animate__delay-0s`}
          // />

          <div
            id="partners"
            style={{
              paddingBottom: 0,
            }}
            className="navbar-partners"
          >
            <div className="partners-community">
              {/* <h3 className="partners-community-title">{t("community")}</h3> */}
              <ul className="partners-community-list">
                {/* <li  className="partners-community-list-item" id="whitepaper">
                  <a id="whitepaper-btn" href={""} target="_blank" rel="noreferrer">
                    Whitepaper
                  </a>
                </li> */}
                {socials.map((social, index) => {
                  return (
                    <li key={index} className="partners-community-list-item">
                      <a href={social.url} target="_blank" rel="noreferrer">
                        <img src={social.image} alt="social" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
