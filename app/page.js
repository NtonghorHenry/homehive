export default function Home() {
  return (
    <main>
      <div className="bg-[url('/homehivebg.webp')] h-[40vh] bg-no-reapeat bg-contain pt-15 md:h-[60v] md:bg-no-repeat md:bg-contain md:pt-25 lg:h-[100vh] lg:bg-no-repeat lg:bg-cover">
        <div className="flex flex-col">
            <h1 className="pt-3 text-2xl font-bold text-center text-white md:pt-5 md:text-3xl md:font-bold md:text-center lg:pt-20 lg:text-6xl text-white font-semibold lg:text-center">Discover Your New Home</h1>
            <p className="text-lg text-white font-semibold text-center md:text-xl md:text-white md:font-semibold md:text-center lg:text-3xl lg:text-white lg:font-semibold lg:text-center">Helping renters find their perfect rental with Smart Search on HomeHive</p>
            <div className="flex justify-center">
              <button className="mt-5 bg-white w-60 h-8 rounded-full text-gray-400 md:mt-10 md:bg-white md:w-80 md:h-10 md:rounded-full md:text-gray-400 lg:mt-15 lg:bg-white lg:w-100 lg:h-12 lg:rounded-full lg:text-gray-400">Search for an Apartments</button>
            </div>
        </div>
      </div>
      <p className="mt-8 text-2xl text-center font-bold  md:mt-10 md:text-3xl md:text-center md:font-bold lg:mt-15 lg:text-4xl lg:text-center lg:font-bold">See how HomeHive can help</p>
      <div className="mt-6 mx-15 grid grid-cols-2 md:mt-8 md:mx-20 md:grid md:grid-cols-2 md:gap-3 lg:mt-10 lg:mx-50 lg:grid lg:grid-cols-3">
        <div className="w-50 h-70 bg-white border border-purple-200 rounded-md hover:shadow-lg py-3 px-2 md:w-60 md:h-80 md:bg-white md:border md:border-purple-200 md:py-3 md:px-2 md:rounded-md md:hover:shadow-lg lg:w-80 lg:h-90 lg:bg-white lg:border lg:border-purple-200 lg:py-4 lg:px-2 lg:rounded-md lg:hover:shadow-lg">
          <img className="h-20 w-20 md:h-20 md:w-20 lg:h-30 lg:w-30" src="/BuyAHome.svg" alt="RentaHome"></img>
          <h1 className="pb-2 text-xl font-bold text-center md:pb-3 md:text-xl md:font-bold md:text-center lg:pb-3 lg:text-xl lg:font-bold lg:text-center">Buy a Home</h1>
          <p className="text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          <div className="flex justify-center mt-5"><button className="bg-purple-700 w-50 h-10 rounded-lg text-white font_semibold hover:bg-white hover:text-purple-700 hover:border border-purple-700">Find a Home</button></div>
        </div>
        <div className="w-50 h-70 bg-white border border-purple-200 rounded-md hover:shadow-lg py-3 px-2 md:w-60 md:h-80 md:bg-white md:border md:border-purple-200 md:py-3 md:px-2 md:rounded-md md:hover:shadow-lg lg:w-80 lg:h-90 lg:bg-white lg:border lg:border-purple-200 lg:py-4 lg:px-2 lg:rounded-lg lg:hover:shadow-lg">
          <img className="h-20 w-20 md:h-20 md:w-20 lg:h-30 lg:w-30" src="/RentAHome.svg" alt="RentaHome"></img>
          <h1 className="pb-2 text-xl font-bold text-center md:pb-3 md:text-xl md:font-bold md:text-center lg:pb-3 lg:text-xl lg:font-bold lg:text-center">Rent an apartment</h1>
          <p className="text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          <div className="flex justify-center mt-5"><button className="bg-purple-700 w-50 h-10 rounded-lg text-white font_semibold hover:bg-white hover:text-purple-700 hover:border border-pruple-700">Find a Rental</button></div>
        </div>
        <div className="w-50 h-70 bg-white border border-purple-200 rounded-md hover:shadow-lg py-3 px-2 md:w-60 md:h-80 md:bg-white md:border md:border-purple-200 md:py-3 md:px-2 md:rounded-md md:hover:shadow-lg lg:w-80 lg:h-90 lg:bg-white lg:border lg:border-purple-200 lg:py-4 lg:px-2 lg:rounded-lg lg:hover:shadow-lg">
          <img className="h-20 w-20 md:h-20 md:w-20 lg:h-30 lg:w-30" src="/Neighborhoods.svg" alt="RentaHome"></img>
          <h1 className="pb-2 text-xl font-bold text-center md:pb-3 md:text-xl md:font-bold md:text-center lg:pb-3 lg:text-xl lg:font-bold lg:text-center">See neighborhoods</h1>
          <p className="text-center">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          <div className="flex justify-center mt-5"><button className="bg-purple-700 w-50 h-10 rounded-lg text-white font_semibold hover:bg-white hover:text-purple-700 hover:border border-purple-700">Check Neighbourhood</button></div>
        </div>
      </div>
      <p className="pt-20  text-4xl text-stone-500 font-bold text-center">Explore Rentals on HomeHive</p>

      <div className="my-10 mx-30 grid grid-cols-4 gap-5">
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House1.webp" alt="House 1"></img>
          <h1 className="font-bold pt-3 text-xl">$4,350/mo</h1>
           <p className="text-gray-600">2 bd 1 ba 1,036 sqft<br></br> 2086 31st Ave,<br></br> San Francisco, CA 94116</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House2.webp" alt="House 2"></img>
          <h1 className="font-bold pt-3 text-xl">$5,458 - $6,661/mo</h1>
           <p className="text-gray-600">1-2 bd 1-2 ba<br></br> 340 Fremont,<br></br>San Francisco, CA 94105</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House3.webp" alt="House 3"></img>
          <h1 className="font-bold pt-3 text-xl">$4,350/mo</h1>
           <p className="text-gray-600">2 bd 1 ba 1,036 sqft<br></br> 2086 31st Ave,<br></br> San Francisco, CA 94116</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gary-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House4.webp" alt="House 4"></img>
          <h1 className="font-bold pt-3 text-xl">$2,995/mo</h1>
           <p className="text-gray-600">1 bd 1 ba 500 sqft<br></br> 1037 Clay St #1,<br></br> San Francisco, CA 94108</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House5.webp" alt="House 5"></img>
          <h1 className="font-bold pt-3 text-xl">$4,350/mo</h1>
           <p className="text-gray-600">2 bd 1 ba 1,036 sqft<br></br> 2086 31st Ave,<br></br> San Francisco, CA 94116</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House6.webp" alt="RentaHome"></img>
          <h1 className="font-bold pt-3 text-xl">$4,350/mo</h1>
           <p className="text-gray-600">2 bd 1 ba 1,036 sqft<br></br> 2086 31st Ave,<br></br> San Francisco, CA 94116</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House7.webp" alt="RentaHome"></img>
          <h1 className="font-bold pt-3 text-xl">$4,350/mo</h1>
           <p className="text-gray-600">2 bd 1 ba 1,036 sqft<br></br> 2086 31st Ave,<br></br> San Francisco, CA 94116</p>
        </div>
        <div className="w-70 h-85 bg-white border border-gray-200 rounded-lg hover:shadow-lg" >
          <img className="h-50 w-70 rounded-lg" src="/House8.webp" alt="RentaHome"></img>
          <h1 className="font-bold pt-3 text-xl">$4,350/mo</h1>
           <p className="text-gray-600">2 bd 1 ba 1,036 sqft<br></br> 2086 31st Ave,<br></br> San Francisco, CA 94116</p>
        </div>
      </div>
    </main>
  );
}
