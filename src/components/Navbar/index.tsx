import React from "react";
import animations from "../../animations";
import images from "../../images";
import { socials } from "../../data";
import { useTranslation } from "react-i18next";

interface Props {
  showSoon?: boolean;
}

function Navbar({ showSoon }: Props) {
  const { t } = useTranslation("cantina");
  return (
    <nav className="navbar">
      <div className="navbar-flex">
        <img src={images.navbar.logo} alt="logo" className="navbar-logo" />
        {showSoon ? (
          <img
            src={images.navbar.date}
            alt="date"
            className={`${animations.fadeInRight} navbar-coming-soon animate__delay-0s`}
          />
        ) : (
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
