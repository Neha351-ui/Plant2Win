import { ethers } from 'ethers';
import ContractABI from '../Utils/ContractABI.json'
import Ticket from './Assets/lottery ticket.png'
import React from 'react'

const CONTRACT_ADDRESS = "0x1fce6edcf1f2640e87f6784e23dea680efb60f39";

const URI = "ipfs://bafkreigvlr4apqhbk2uycn4iemnhxzj2yimj5klbulovivzsdbzsts4hju"
const Donate = (props) => {


  const mintDonate = async () => { 
    console.log("Going to pop wallet now to pay gas...")

    // try {
    //   console.log("ye 15 hai")
    //                 const { ethereum } = window;
    //                 if (ethereum) {
    //                   console.log("ye 18 hai.")
    //                     const provider = new ethers.providers.Web3Provider(ethereum);
    //                     const signer = provider.getSigner();
    //                     const contract = new ethers.Contract(CONTRACT_ADDRESS, ContractABI, signer);
    //                     console.log("Going to pop wallet now to pay gas...")
    //                     await contract.safeMint(props.address,URI);
    
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }
            }

  return (
    <div>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Donate</h2>
        <p className="leading-relaxed text-base">Donation shows Appreciation Our goal to achieve carbon neutrality, meaning a return to levels of CO2 naturally present in the atmosphere prior to human intervention.</p>
        
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Get A Lottery ticket</h2>
        <p className="leading-relaxed text-base">Get the chance to win NFT</p>
        
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Win NFT</h2>
        <p className="leading-relaxed text-base">We the part of ecosystem. Save the environment</p>
        
      </div>
    </div>
    <button className="flex mx-auto mt-20 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Donate And Get a Lottery Ticket</button>
  </div>



  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-38 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Ticket}/>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
    </div>
  </div>
</section>
</section>

    </div>
  )
}

export default Donate