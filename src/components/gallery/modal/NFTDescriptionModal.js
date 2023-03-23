import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const NFTDescriptionModal = ({isActive, nft, closeModal}) => {
  const { t } = useTranslation();

  return (
    <>
      {
        nft ? (
          <div id="nft-description-modal" className={`modal ${ isActive && nft ? "is-active" : "" }`}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-card is-small-modal">
              <header style={ {backgroundColor: '#FFFFFF', borderBottom: 'none'} } className="modal-card-head">
                <p className="modal-card-title">
                </p>
                <button className="delete" onClick={closeModal} aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <figure className="image">
                  <Image
                    src={ nft?.image } 
                    alt={ nft?.item }
                    width={80}
                    height={80}
                  />
                </figure>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-6">
                        { nft?.address }
                      </p>
                      <p className="title is-4">
                        { nft?.item }
                      </p>
                      {/* <p className="subtitle is-6">
                        by { nft?.owner }
                      </p> */}
                    </div>
                  </div>
                  {/* <div className="content">
                    { nft?.item_description }
                  </div> */}
                </div>
              </section>
              <footer className="modal-card-foot">
                <a
                  href={nft?.opensea_link}
                  target="_blank"
                  rel="noreferrer"
                  className="button is-info"
                >
                  Opensea
                </a>
              </footer>
            </div>
          </div>
        ) : ''
      }
    </>
  );
};

export default NFTDescriptionModal;
