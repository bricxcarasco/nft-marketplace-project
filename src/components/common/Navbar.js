import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';
import LanguageRole from "@/utils/constants/LanguageRole";
import Link from "next/link";

const Navbar = ({ web3Handler, account, signOut, switchLanguage, loading }) => {
  const { t, i18n } = useTranslation();
  const { locale, locales, push } = useRouter();

  const [isActive, setActive] = useState(false);

  /**
   * Toggle hamburger menu of navbar when mobile
   *
   * @param {object} event
   * @returns {void}
   */
  const toggleNavbarMobile = (event) => {
    event.preventDefault();
    setActive(!isActive);
  };

  /**
   * change language
   *
   * @param {object} event
   * @returns {void}
   */
  const changeLanguage = (event, language) => {
    event.preventDefault();
    switchLanguage(language);
    i18n.changeLanguage(language);
    push('/', undefined, { locale: language });
  };

  return (
    <>
      <nav
        className="navbar is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            { t("navbar.home") }
          </Link>
          <a
            href="false"
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : null}`}
            aria-label="menu"
            aria-expanded="false"
            datatarget="navbarBasicExample"
            onClick={toggleNavbarMobile}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : null}`}
        >
          <div className="navbar-start"></div>

          <div className="navbar-end">
            {
              !account ? (
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link href="#" className="navbar-link">
                    { t('navbar.wallet') }
                  </Link>
                  <div className="navbar-dropdown">
                    <Link href="#" onClick={web3Handler} className="navbar-item">
                      MetaMask
                    </Link>
                  </div>
                </div>
              ) : (
                <p className="navbar-item">
                  { `${account.slice(0, 5)}...${account.slice(38, 42)}` }
                </p>
              )
            }
            <Link href="/gallery" className="navbar-item">
              { t('navbar.gallery') }
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link href="#" className="navbar-link">
                { t('navbar.market_place') }
              </Link>
              <div className="navbar-dropdown">
                <a target="_blank" href="https://opensea.io/" rel="noopener noreferrer" className="navbar-item">
                  Opensea
                </a>
              </div>
            </div>
            <Link href="/license-information" className="navbar-item">
              { t('navbar.license_information') }
            </Link>
            <Link href="/terms-conditions" className="navbar-item">
              { t('navbar.terms_and_conditions') }
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link href="#" className="navbar-link">
                { t('navbar.language') }
              </Link>
              <div className="navbar-dropdown">
                {
                  locales.map((language, idx) => (
                    <div key={idx}>
                      <Link
                        href=""
                        className="navbar-item"
                        onClick={(event) => changeLanguage(event, language)}
                      >
                        { LanguageRole[language] }
                      </Link>

                      {
                        idx != locales.length - 1 ? <hr className="navbar-divider" /> : ''
                      }
                    </div>
                  ))
                }
              </div>
            </div>
            {
              account ? (
                <Link href="#" onClick={signOut} className="navbar-item">
                  { t('navbar.logout') }
                </Link>
              ) : ''
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
