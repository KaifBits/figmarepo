import mouse from './88221.png';
import bag from './okok.png';
import './style.css'
function App() {
  return (
    <>
    <div className="w-full h-full relative">
       {/* Main Container */}
    <div className="w-full  flex flex-col items-center justify-center sm:p-6 ">
     
      <div className="h-auto flex flex-col justify-center items-center w-1/2 md:w-2/3">
        {/* Header Section */}
        <div className="relative h-auto w-full">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
  <div className="absolute inset-0 u-shape-gradient" style={{
      pointerEvents: 'none' 
  }}></div>

  <div className="relative pt-6 z-10">
    {/* Navigation */}
    <div className="flex flex-col sm:flex-row sm:justify-between text-white font-medium px-4 sm:px-8">
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="border h-6 w-4 rounded-xl border-white "></div>
        <p className="text-center md:text-lg sm:text-left">PoP Rock Crystal</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 text-center sm:text-left">
        <p>Home</p>
        <p>Shop</p>
        <p>About Us</p>
        <p>Help</p>
        <img src={bag} alt="textt" className='w-9 h-7' />
      </div>
    </div>

    {/* Welcome Text */}
    <div className="text-white font-bold px-4 sm:px-10 space-y-2 mt-6 sm:mt-14 h-auto sm:h-48 w-full sm:w-1/2">
      <h1 className="text-xl font-medium">Welcome to</h1>
      <h1 className="text-2xl">Pop Rock Crystal Shop!</h1>
      <p className="text-xs font-normal text-black pt-2">
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
  <div className="hidden md:block absolute right-0 top-40 rounded-l-3xl bg-white pt-10 h-72 w-[70px] border border-white"></div>

  {/* Featured Product */}
  <div className="absolute right-4  md:top-28 sm:top-20 sm:right-6   bg-white pt-10 shadow-xl ring-1 h-[330px] w-64 sm:w-80 ring-gray-900/5 mx-auto sm:max-w-lg sm:rounded-2xl z-10">
    <button className="w-20 bg-purple-400 rounded-r-md p-1 m-0 text-white">New Lot</button>
    <div className="flex flex-col items-center space-y-4 mt-4">
      <img
        src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
        className="w-40 h-40"
        alt="Product"
      />
      <p className="text-sm font-thin text-gray-400 text-center">
        CRYSTAL AGATE PHONE GRIP <span className="text-blue-800 font-semibold">-18.99$</span>
      </p>
    </div>
 

  </div>
  
</div>


        {/* SVG Wave */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className="">
          <path
            fill="#22d3ee"
            fillOpacity="1"
            d="M0,240L48,210C96,180,192,180,288,170C384,160,480,170,576,190C672,210,768,230,864,210C960,190,1056,180,1152,200C1248,220,1344,220,1392,210L1440,200L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="w-full flex justify-end pt-5  h-24 pr-16">
        <svg width="240" height="28" viewBox="0 0 260 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g clip-path="url(#clip0_1_60)" filter="url(#filter0_d_1_60)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5L6 23C6 23.7956 6.31607 24.5587 6.87868 25.1213C7.44129 25.6839 8.20435 26 9 26H27C27.7956 26 28.5587 25.6839 29.1213 25.1213C29.6839 24.5587 30 23.7956 30 23V5C30 4.20435 29.6839 3.44129 29.1213 2.87868C28.5587 2.31607 27.7956 2 27 2H9ZM18.531 17.969C18.6718 18.1098 18.7509 18.3008 18.7509 18.5C18.7509 18.6992 18.6718 18.8902 18.531 19.031C18.3902 19.1718 18.1992 19.2509 18 19.2509C17.8008 19.2509 17.6098 19.1718 17.469 19.031L12.969 14.531C12.8992 14.4613 12.8437 14.3786 12.8059 14.2874C12.7681 14.1963 12.7487 14.0987 12.7487 14C12.7487 13.9013 12.7681 13.8037 12.8059 13.7125C12.8437 13.6214 12.8992 13.5387 12.969 13.469L17.469 8.969C17.5387 8.89927 17.6215 8.84395 17.7126 8.80621C17.8037 8.76848 17.9014 8.74905 18 8.74905C18.0986 8.74905 18.1963 8.76848 18.2874 8.80621C18.3785 8.84395 18.4613 8.89927 18.531 8.969C18.6007 9.03873 18.656 9.12152 18.6938 9.21262C18.7315 9.30373 18.7509 9.40138 18.7509 9.5C18.7509 9.59862 18.7315 9.69627 18.6938 9.78738C18.656 9.87848 18.6007 9.96127 18.531 10.031L15.3105 13.25H22.5C22.6989 13.25 22.8897 13.329 23.0303 13.4697C23.171 13.6103 23.25 13.8011 23.25 14C23.25 14.1989 23.171 14.3897 23.0303 14.5303C22.8897 14.671 22.6989 14.75 22.5 14.75H15.3105L18.531 17.969Z" fill="#8A93E5"/>
</g>
<g clip-path="url(#clip1_1_60)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M257 2C257.796 2 258.559 2.31607 259.121 2.87868C259.684 3.44129 260 4.20435 260 5V23C260 23.7956 259.684 24.5587 259.121 25.1213C258.559 25.6839 257.796 26 257 26H239C238.204 26 237.441 25.6839 236.879 25.1213C236.316 24.5587 236 23.7956 236 23V5C236 4.20435 236.316 3.44129 236.879 2.87868C237.441 2.31607 238.204 2 239 2H257ZM247.469 17.969C247.328 18.1098 247.249 18.3008 247.249 18.5C247.249 18.6992 247.328 18.8902 247.469 19.031C247.61 19.1718 247.801 19.2509 248 19.2509C248.199 19.2509 248.39 19.1718 248.531 19.031L253.031 14.531C253.101 14.4613 253.156 14.3786 253.194 14.2874C253.232 14.1963 253.251 14.0987 253.251 14C253.251 13.9013 253.232 13.8037 253.194 13.7125C253.156 13.6214 253.101 13.5387 253.031 13.469L248.531 8.969C248.461 8.89927 248.378 8.84395 248.287 8.80621C248.196 8.76848 248.099 8.74905 248 8.74905C247.901 8.74905 247.804 8.76848 247.713 8.80621C247.622 8.84395 247.539 8.89927 247.469 8.969C247.399 9.03873 247.344 9.12152 247.306 9.21262C247.268 9.30373 247.249 9.40138 247.249 9.5C247.249 9.59862 247.268 9.69627 247.306 9.78738C247.344 9.87848 247.399 9.96127 247.469 10.031L250.69 13.25H243.5C243.301 13.25 243.11 13.329 242.97 13.4697C242.829 13.6103 242.75 13.8011 242.75 14C242.75 14.1989 242.829 14.3897 242.97 14.5303C243.11 14.671 243.301 14.75 243.5 14.75H250.69L247.469 17.969Z" fill="#8A93E5"/>
</g>
<circle cx="61" cy="14" r="7" fill="#8A93E5"/>
<circle cx="85" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="109" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="133" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="157" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="181" cy="14" r="7" fill="#D7DBFF"/>
<circle cx="205" cy="14" r="7" fill="#D7DBFF"/>
<defs>
<filter id="filter0_d_1_60" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="3"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.541176 0 0 0 0 0.576471 0 0 0 0 0.898039 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_60"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_60" result="shape"/>
</filter>
<clipPath id="clip0_1_60">
<rect width="24" height="24" fill="white" transform="translate(6 2)"/>
</clipPath>
<clipPath id="clip1_1_60">
<rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 260 2)"/>
</clipPath>
</defs>
</svg>
</div>
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
          <div className="bg-white shadow-xl ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    <button className="bg-blue-400 text-white font-medium px-4 py-1 rounded-xl hover:bg-blue-600 transition-colors">
      Buy Now
    </button>
  </div>
</div>

<div className="bg-white  ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

          {/* Repeat the Product Card as needed */}
          {/* ... */}
        
        
<div className="bg-white ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

          
<div className="bg-white  ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

         
<div className="bg-white  ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

<div className="bg-white  ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

         
<div className="bg-white  ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

<div className="bg-white ring-1 h-60 w-48 ring-gray-900/5 rounded-lg">
  <div className="flex flex-col justify-center items-center space-y-2 p-3">
    <img
      src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
      className="w-28 h-28"
      alt="Product"
    />
    <p className="text-xs font-thin text-gray-400 text-center">CRYSTAL AGATE PHONE GRIP</p>
    <span className="text-blue-800 font-semibold text-sm">18.99$</span>
    
    <button class=" text-cyan-400 font-normal px-4 py-1 rounded-xl border border-cyan-400">Buy Now</button>
  </div>
</div>

          
        </div>
        

        <button className="my-14 text-blue-600 font-medium px-5 py-2 mb-16 rounded-md border border-blue-400">
          View All
        </button>

        {/* Best Price Section */}
        <div className="absolute bottom-72 mt-16">
       
        <div className="flex w-full h-72 md:space-x-7 justify-start">
        <div className="w-7/12 flex flex-col items-end space-y-6 pl-16  m-0    ">
          <div className="text-end">
            <p className="text-3xl">BEST PRICE</p>
            <h1 className="text-5xl ">Agate Phone Grip</h1>
          </div>
          <div className='flex flex-col w-96 justify-end items-end'>
          <div className="flex items-end justify-end  w-96 space-x-4 pr-1">
            <p className="text-lg text-blue-500 line-through">44.50$</p>
            <p className="text-3xl text-red-500 font-bold">19.50$</p>
           
          </div>
          <p className="text-end max-w-lg">
            Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>
          <button className="bg-blue-400 text-white font-medium px-5 py-2 mt-6 rounded-md hover:bg-blue-600 transition-colors">
                Buy Now
              </button>

         
          </div>
          
        
        </div>
         {/* Bottom circle */}
         <div className="   shadow-xl ring-1 md:h-72 md:w-72 sm:h-48 sm:w-48 bg-inherit ring-gray-900/5  rounded-full flex flex-col items-center justify-center">
        <div className="  bg-white shadow-xl ring-1 md:h-60 md:w-60 sm:h-40 sm:w-40 ring-gray-900/5  rounded-full flex flex-col items-center justify-center">
    <div className="bg-white pt-10 shadow-xl ring-1 md:h-44 md:w-44 sm:h-28 sm:w-28 ring-gray-900/5 rounded-full flex items-center justify-center">
      <img
        src="https://i.etsystatic.com/34908462/r/il/452aff/5947428928/il_1140xN.5947428928_eamz.jpg"
        className="md:h-24 md:w-24 sm:h-7 sm:w-7"
        alt="Product"
      />
    </div>
  </div>
  </div> 
        </div>
        </div>
       
      
        {/* Bottom SVG Wave and Image */}
        <div className=" md:w-full md:h-full pt-52 sm:w-3/4">
   
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#22d3ee"
      fillOpacity="1"
      d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,149.3C672,160,768,192,864,186.7C960,181,1056,139,1152,101.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
  <div className="w-full bg-cyan-400 h-16">

  </div>
  <div className="w-full h-32 bg-blue-950">
  
  
</div>

      </div>
    </div>
    </div>
    


    </div>
    </>
  );
}

export default App;
