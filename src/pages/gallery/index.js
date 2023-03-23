import NFTDescriptionModal from "../../components/gallery/modal/NFTDescriptionModal";
import NFTItemList from "../../components/gallery/NFTItemList";
import { useState } from "react";
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_BASE_URL}api/items`);

  return {
    props: {
      nftItems: res.data.data
    }
  }
}

export default function Gallery({ nftItems }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState(null);

  /**
   * Open modal function
   *
   * @param {object} nft
   * @returns {void}
   */
  const openModal = (nft) => {
    setModalValue(nft);
    setModalOpen(true);
  }

  /**
   * Close modal function
   *
   * @returns {void}
   */
  const closeModal = () => {
    setModalValue(null);
    setModalOpen(false);
  }

  return (
    <>
      <NFTDescriptionModal isActive={modalOpen} nft={modalValue} closeModal={closeModal} />
      <div className="columns">
        <div className="column is-four-quarters">
          <div className="columns is-multiline">
            { nftItems.map((nft, index) => <NFTItemList key={index} nft={nft} openModal={openModal} />) }
          </div>
        </div>
      </div>
    </>
  )
}
