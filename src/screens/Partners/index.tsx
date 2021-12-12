import { useTranslation } from "react-i18next";
import { Screen } from "../../components";
import Title from "../../components/Title";
import { partners, socials } from "../../data";
import { ScreenComponentProps } from "../../types";

function Partners({ isActive, bg, overlay }: ScreenComponentProps) {
  const { t } = useTranslation("partners");
  return (
    <Screen id="partners" isActive={isActive} overlay={overlay} bg={bg}>
      <Title text={t("title")} isActive={isActive} />

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
    </Screen>
  );
}

export default Partners;
