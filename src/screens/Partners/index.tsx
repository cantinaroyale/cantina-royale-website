import { useTranslation } from "react-i18next";
import animations from "../../animations";
import { partners, socials } from "../../data";
import { ScreenComponentProps } from "../../types";

function Partners({ isActive }: ScreenComponentProps) {
  const { t } = useTranslation("partners");
  return (
    <div
      className={`partners screen ${
        isActive ? animations.fadeIn : animations.fadeOut
      }`}
    >
      <h3 className={`${animations.slideInUp} title`}>{t("title")}</h3>

      <div className="partners-flex">
        {partners.map((list, index) => {
          return (
            <ul className="partners-list" key={index}>
              {list.map((partner, i) => {
                return (
                  <li
                    style={{ width: `calc(100% / ${list.length} )` }}
                    className="partners-list-item"
                    key={i}
                  >
                    <img src={partner} alt="partner" />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>

      <div className="partners-community">
        <h3 className="partners-community-title">{t("community")}</h3>
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
  );
}

export default Partners;
