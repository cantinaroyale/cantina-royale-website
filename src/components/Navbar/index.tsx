import React from "react";
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
          <></>
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
