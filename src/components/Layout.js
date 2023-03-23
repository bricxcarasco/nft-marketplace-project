import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useTranslation } from 'react-i18next';
import Head from 'next/head'
import Navbar from './common/Navbar';
import MetaMaskInstall from './metamask/modal/MetaMaskInstall';
import axios from 'axios';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { i18n } = useTranslation();


  /**
   * Open modal function
   *
   * @returns {void}
   */
  const openModal = () => {
    setModalOpen(true);
  }

  /**
   * Close modal function
   *
   * @returns {void}
   */
  const closeModal = () => {
    setModalOpen(false);
  }

  /**
   * MetaMask Login/Connect
   * 
   * @returns {void}
   * 
  */
  const web3Handler = async () => {

    if (typeof window.ethereum === 'undefined') {
      console.log('Metamask is not installed.');
      openModal();
      return;
    }

    // Get MetaMask ethereum accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    const requestBody = {
      account_address: accounts[0]
    };
  
    // Check if account not exists and save in Airtable
    await axios.post(`api/users/find/account_address`, requestBody)
      .then(async response => {
        console.log(response.data);
        if (response.data.status === 404) {
          // Add account in Airtable API
          await axios.post(`api/users/add`, requestBody);
        }

        setAccount(accounts[0]);
        localStorage.setItem("nft_account", accounts[0]);
      })
      .catch(async (error) => {
        console.log(error);
      });

    // Get provider from MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Set signer
    const signer = provider.getSigner();

    setLoading(false);
  };

  /**
   * MetaMask Signout
   * 
   * @returns {void}
   * 
  */
  const signOut = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const ethereum = window.ethereum;
      await ethereum.request({
        method: 'wallet_requestPermissions',
        params: [
          {
            eth_accounts: {},
          },
        ],
      }).then(() => {
        setAccount(null);
        localStorage.removeItem("nft_account");
        console.log('Permissions revoked');
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  /**
   * change language
   *
   * @param {object} event
   * @returns {void}
   */
  const changeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    setAccount(localStorage.getItem('nft_account'));
  }, []);

  return (
    <>
      <Head>
          <title>NFT Marketplace</title>
          <meta property="nft" content="NFT Marketplace" key="nft" />
      </Head>

      <MetaMaskInstall isActive={modalOpen} closeModal={closeModal} />

      <Navbar web3Handler={web3Handler} signOut={signOut} account={account} switchLanguage={changeLanguage} loading={loading} />
      
      <section className="section">
        <div className="container">
            { children }
        </div>
      </section>
    </>
  );
}

export default Layout;