import Image from 'next/image';

const NFTItemList = ({nft, openModal}) => {
  const { image, item, owner, item_description } = nft;

  return (
    <div className="column is-one-quarter">
      <div className="card modal-overlay" onClick={() => openModal(nft)}>
        <div className="card-image">
          <figure className="image">
            <Image
              src={ image } 
              alt={ item }
              rel="preload"
              as="image"
              width={300}
              height={225}
              decoding="async"
              priority="high"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                { item }
              </p>
              <p className="subtitle is-6">
                by { owner }
              </p>
            </div>
          </div>
          <div className="content">
            { item_description }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTItemList;