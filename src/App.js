import mouse from './88221.png';
import bag from './market.png';

function App() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Main Container */}
      <div className="h-auto flex flex-col justify-center items-center w-full md:w-1/2">
        {/* Header Section */}
        <div className="relative bg-gradient-to-b from-cyan-300 via-purple-200 pt-6 to-cyan-400 h-auto w-full">
          <div>
            {/* Navigation */}
            <div className="flex flex-col sm:flex-row sm:justify-between text-white font-medium px-4 sm:px-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="border h-6 w-4 rounded-xl border-white mr-2"></div>
                <p className="text-center sm:text-left">PoP Rock Crystal</p>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 text-center sm:text-left">
                <p>Home</p>
                <p>Shop</p>
                <p>About Us</p>
                <p>Help</p>
                <img src={bag} alt="textt" className='size-5' />
              </div>
              
            </div>

            {/* Welcome Text */}
            <div className="text-white font-bold px-4 sm:px-10 space-y-2 mt-6 sm:mt-14 h-auto sm:h-48 w-full sm:w-1/2">
              <h1 className="text-2xl font-medium">Welcome to</h1>
              <h1 className="text-3xl">Pop Rock Crystal Shop!</h1>
              <p className="text-xs font-mono text-black pt-2">
                Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                <button className="text-blue-600 font-medium px-5 py-2 rounded-2xl bg-white border border-blue-400">
                  Shop Now
                </button>
                <button className="text-black text-sm font-thin px-5 py-2">About Us</button>
              </div>
            </div>
          </div>

          {/* Decorative Side Element */}
          <div className="hidden md:block absolute right-0 top-52 rounded-l-3xl bg-white pt-10 h-72 w-[70px] border border-white"></div>

          {/* Featured Product */}
          <div className="absolute right-4 top-80 sm:right-6 sm:top-36 bg-white pt-10 shadow-xl ring-1 h-80 w-72 sm:w-80 ring-gray-900/5 mx-auto sm:max-w-lg sm:rounded-2xl">
            <button className="w-20 bg-purple-400 rounded-r-md p-1 m-0 text-white">New Lot</button>
            <div className="flex flex-col items-center space-y-4 mt-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-44 h-44"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">
                CRYSTAL AGATE PHONE GRIP <span className="text-blue-800 font-semibold">-18.99$</span>
              </p>
            </div>
          </div>
        </div>

        {/* SVG Wave */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#22d3ee"
            fillOpacity="1"
            d="M0,240L48,210C96,180,192,180,288,170C384,160,480,170,576,190C672,210,768,230,864,210C960,190,1056,180,1152,200C1248,220,1344,220,1392,210L1440,200L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        {/* Scroll Down Indicator */}
        <div className="flex space-x-3 my-14 items-center">
          <img src={mouse} className="h-6 w-6" alt="Scroll down" />
          <p>Scroll down</p>
        </div>

        {/* All Products Section */}
        <h1 className="text-center text-2xl font-semibold text-blue-950 mb-8">All Products</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 justify-start items-start mb-6 px-4 w-full">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-400">Filter:</span>
            <select className="px-3 py-2 font-bold text-black">
              <option>All Products</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-400">Sort:</span>
            <select className="px-3 py-2 font-bold text-black">
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex flex-wrap gap-6 justify-start px-4 ">
          {/* Product Card */}
          <div className="bg-white shadow-xl ring-1 h-auto w-60 ring-gray-900/5 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-36 h-36"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
              <span className="text-blue-800 font-semibold">18.99$</span>
              <button className="bg-blue-400 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
          {/* Repeat the Product Card as needed */}
          {/* ... */}
        
          <div className="bg-white  ring-1 h-auto w-60 ring-gray-900/5 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-36 h-36"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
              <span className="text-blue-800 font-semibold">18.99$</span>
              <button class=" text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-400">Buy Now</button>
            </div>
          </div>
          <div className="bg-white  ring-1 h-auto w-60 ring-gray-900/5 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-36 h-36"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
              <span className="text-blue-800 font-semibold">18.99$</span>
              <button class=" text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-400">Buy Now</button>
            </div>
          </div>
          <div className="bg-white  ring-1 h-auto w-60 ring-gray-900/5 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-36 h-36"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
              <span className="text-blue-800 font-semibold">18.99$</span>
              <button class=" text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-400">Buy Now</button>
            </div>
          </div>
          <div className="bg-white  ring-1 h-auto w-60 ring-gray-900/5 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-36 h-36"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
              <span className="text-blue-800 font-semibold">18.99$</span>
              <button class=" text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-400">Buy Now</button>
            </div>
          </div>
          <div className="bg-white  ring-1 h-auto w-60 ring-gray-900/5 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-4 p-4">
              <img
                src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                className="w-36 h-36"
                alt="Product"
              />
              <p className="text-sm font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
              <span className="text-blue-800 font-semibold">18.99$</span>
              <button class=" text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-400">Buy Now</button>
            </div>
          </div>
          
        </div>
        

        <button className="my-14 text-blue-600 font-medium px-5 py-2 rounded-md border border-blue-400">
          View All
        </button>

        {/* Best Price Section */}
        <div className="w-full flex flex-col items-center space-y-6 px-4">
          <div className="text-end">
            <p className="text-3xl">BEST PRICE</p>
            <h1 className="text-5xl">Agate Phone Grip</h1>
          </div>
          <div className='flex flex-col w-96 justify-end items-end'>
          <div className="flex items-end justify-end  w-96 space-x-4 pr-1">
            <p className="text-lg text-blue-500 line-through">44.50$</p>
            <p className="text-3xl text-red-500 font-bold">19.50$</p>
           
          </div>
          <p className="text-end max-w-lg">
            Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <button className="text-blue-600 font-medium w-32 px-5 py-2 rounded-md border border-blue-400 mt-16">
            Buy Now
          </button>

         
          </div>
          
        
        </div>
      
        {/* Bottom SVG Wave and Image */}
        <div className="w-full h-full relative mt-14">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#22d3ee"
              fillOpacity="1"
              d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,149.3C672,160,768,192,864,186.7C960,181,1056,139,1152,101.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="absolute bottom-7 right-6 bg-white shadow-xl ring-1 h-64 w-64 ring-gray-900/5 mx-auto rounded-full">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-white pt-10 shadow-xl ring-1 h-48 w-48 ring-gray-900/5 mx-auto rounded-full flex items-center justify-center">
                <img
                  src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
                  className="h-24 w-24"
                  alt="Product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
