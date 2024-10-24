import { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  MapPin,
} from 'lucide-react';

const LandingPage = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const categories = [
    { icon: "https://cdn-icons-png.flaticon.com/32/3194/3194766.png", label: "Fruits & Vegetables" },
    { icon: "https://cdn-icons-png.flaticon.com/32/7265/7265137.png", label: "Legumes" },
    { icon: "https://cdn-icons-png.flaticon.com/32/6124/6124987.png", label: "Nuts & Edible Seeds" },
    { icon: "https://cdn-icons-png.flaticon.com/32/992/992747.png", label: "Grain" },
    { icon: "https://cdn-icons-png.flaticon.com/32/8781/8781138.png", label: "Cane" },
    { icon: "https://cdn-icons-png.flaticon.com/32/2395/2395796.png", label: "Livestock" },
    { icon: "https://cdn-icons-png.flaticon.com/32/2934/2934109.png", label: "Seafood" },
    { icon: "https://cdn-icons-png.flaticon.com/32/2619/2619506.png", label: "Eggs & Milk" },
    { icon: "https://cdn-icons-png.flaticon.com/32/751/751621.png", label: "Coffee & Tea" },
    { icon: "https://cdn-icons-png.flaticon.com/32/6866/6866504.png", label: "Herbs & Spices" },
    { icon: "https://cdn-icons-png.flaticon.com/32/490/490091.png", label: "Forestry" },
    { icon: "https://cdn-icons-png.flaticon.com/32/1599/1599876.png", label: "Floral" },
    { icon: "https://cdn-icons-png.flaticon.com/32/1047/1047503.png", label: "Honey" },
    { icon: "https://cdn-icons-png.flaticon.com/32/7439/7439713.png", label: "Fibre & Textiles" },
    { icon: "https://cdn-icons-png.flaticon.com/32/2913/2913136.png", label: "Fodder" },
  ];

  return (
    <div className="relative font-poppins z-0">
      {/* Background Image */}
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('/api/placeholder/1600/900')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            From Farm to Market,{' '}
            <br />
            <span className="text-[#22c55e]">Seamlessly.</span>
          </h1>
        </div>

        {/* Search Section */}
        <div className="absolute bottom-20 left-0 right-0 mx-auto w-11/12 md:w-10/12 lg:w-8/12 bg-white shadow-xl rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-stretch space-y-4 md:space-y-0 md:space-x-4">
            {/* Category Dropdown */}
            <div className="flex-1 relative">
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <img 
                    src={categories[0].icon}
                    alt="Category"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-gray-700">Category</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    categoryOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div
                className={`
                  absolute mt-2 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-[1]
                  transition-all duration-300 origin-top
                  ${categoryOpen
                    ? 'opacity-100 scale-y-100 translate-y-0'
                    : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}
                `}
                style={{
                  width: 'calc(100vw - 2rem)', // Matches parent container width
                  maxWidth: '83.333333%', // Matches parent's w-10/12
                  left: '50%',
                  transform: `translateX(-50%) ${categoryOpen ? 'scaleY(1)' : 'scaleY(0)'}`,
                }}
              >
                <div className="p-4 grid grid-cols-4 gap-6">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                    >
                      <img 
                        src={category.icon}
                        alt={category.label}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-gray-700 text-sm">{category.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Search */}
            <div className="flex-[2]">
              <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 transition-colors">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Location Search */}
            <div className="flex-1">
              <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 transition-colors">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search Location"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
