import { useTranslation } from 'react-i18next';

const MetaMaskInstall = ({isActive, closeModal}) => {
  const { t } = useTranslation();

  return (
    <div id="nft-description-modal" className={`modal ${ isActive ? "is-active" : "" }`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card is-small-modal has-text-centered">
        <header style={ {backgroundColor: '#FFFFFF', borderBottom: 'none'} } className="modal-card-head">
          <p className="modal-card-title">
          </p>
          <button className="delete" onClick={closeModal} aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <p className="is-size-7 pb-2">
            ※{ t('paragraphs.metamask_not_installed') }
            { t('paragraphs.please_install_metamask') }
          </p>
          <a
            href="https://metamask.io/download/"
            target="_blank"
            rel="noreferrer"
            className="button is-info is-fullwidth"
          >
            { t('labels.download_metamask') }
          </a>
        </section>
      </div>
    </div>
  );
};

export default MetaMaskInstall;
