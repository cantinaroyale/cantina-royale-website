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

      <ul className="partners-list">
        {partners.map((img, index) => {
          return (
            <li className="partners-list-item" key={index}>
              <img src={img} alt="" />
            </li>
          );
        })}
      </ul>

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
