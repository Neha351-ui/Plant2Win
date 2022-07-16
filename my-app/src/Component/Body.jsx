
import Assets from './Assets/img1.jpg'
import Green from './Assets/img2.png'
import Gren from './Assets/img3.png'
import Gran from './Assets/img4.png'


const Body = () => {

  return (

    <div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">SAVE THE ENVIRNMENT TO
              <br className="hidden lg:inline-block" />SAVE THE FUTURE
            </h1>
            <p className="mb-8 leading-relaxed">A Nation that Destroys its soil, Destroys itself forest are lungs of our lands purifying the air and giving fresh strength to our people SAVE the ENVIRNMENT to SAVE THE FUTURE</p>
            <div className="flex justify-center">
              <button type="button" className="inline-block px-14 py-7 bg-green-500 text-white font-medium text-m leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Donate</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Assets} />
          </div>
        </div>
      </section>


      {/* MISSION*/}

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

      {/* ABOUT */}


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ABOUT
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed"> We believe that organizations that are deeply rooted in local communities are best positioned to lead Save Envirnment. Your donation to this fund will help build stronger response capacities in communities around the world.
                So that we are all better equipped to face future outbreaks. this Fund will send you A NFT based lottery ticket.</p>
            <div className="flex justify-center">
             

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Gran} />
          </div>
        </div>
      </section>




      {/* CONTRACT   */}


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-50 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={Nature} />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-55 overflow-hidden">
              <section class="text-gray-600 body-font relative">
            <div class="container px-8 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  )
}

export default Body