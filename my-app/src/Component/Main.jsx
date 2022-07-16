import Assets from './Assets/img1.jpg'
import Green from './Assets/img2.png'
import Gren from './Assets/img3.png'
import Gran from './Assets/img4.png'
import Nature from './Assets/img5.png'
import React, { useEffect, useState } from "react";
import { networks } from "../Utils/Network";
import Donate from "./Donate";


const Main = () => {

  // Connect to Metamask



  const [currentAccount, setCurrentAccount] = useState('');
  const [network, setNetwork] = useState('');
  // Implement connectWallet method


  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      // Boom! This should print out public address once we authorize Metamask.
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account found');
    }

    // This is the new part, we check the user's network chain ID
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    setNetwork(networks[chainId]);

    ethereum.on('chainChanged', handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {

      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  //RanderMethod Implementation

  const renderNotConnectedContainer = () => (<>

    <div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">DECARBONISATION OF
              <br className="hidden lg:inline-block" />THE ENVIRNOMENT
            </h1>
            <p className="mb-8 leading-relaxed">Mother Earth is a giver, no doubt, but are we reciprocating? The answer lies in analysing our situation and taking steps to rectify it. 

              It is the responsibility of the present generation to protect the environment so that our future generations get a better planet to live on.</p>
            <div className="flex justify-center">
              <button type="button" className="inline-block px-14 py-7 bg-green-500 text-white font-medium text-m leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={connectWallet} >Donate</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Assets} />
          </div>
        </div>
      </section>


      

      {/* ABOUT */}


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ABOUT
              <br className="hidden lg:inline-block" />
            </h1>
            <ul className="mb-8 leading-relaxed">Our goal to achieve carbon neutrality, meaning a return to levels of CO2 naturally present in the atmosphere prior to human intervention, Three main strategies is optimize, electrify and decarbonize.</ul>
            <div className="flex justify-center">


            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Gran} />
          </div>
        </div>
      </section>


      {/* MISSION*/}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-38 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MESSION
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">Afforestation can provide an important contribution to limiting climate change, as trees take up CO2 from the atmosphere. However, the implementation of relatively cheap. Carbon removal generally has been underfunded</p>
            <div className="flex justify-center">
            </div>
          </div>
        </div>
      </section>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-50 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={Green} />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-55 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={Gren} />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CONTACT US  */}


      <section className="text-green-500 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CONTACT US
              <br className="hidden lg:inline-block" />
            </h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          
          <span className="inline-flex">
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>

  </>
  );
  const renderConnectedContainer = () => {
    if (network !== 'Rinkeby') {
      return (<div>
        <h1>Please connect to Rinkeby Network</h1>
      </div>
      );
    }
    return (<div >
      <Donate address={currentAccount} />


    </div>);
  };
  return (
    <div>
      {!currentAccount && renderNotConnectedContainer()}
      {currentAccount && renderConnectedContainer()}

    </div>
  )
}

export default Main