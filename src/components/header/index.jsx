import { Navbar } from "./navbar";
import rasm from "../../assets/icons/rasm.svg";

export const Header = () => {
  return (
    <header className="bg-gray-900">
    <div className="container mx-auto">
      <Navbar />
  
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="w-full md:w-1/2 px-6 py-10 md:px-10 md:py-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Welcome to Restaurant
          </h1>
          <p className="text-gray-400 mb-8 text-base md:text-lg leading-relaxed">
            The people, food, and prime locations make the perfect place for good friends & family to come together and have a great time.
          </p>
          <button className="px-8 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
            View Menu
          </button>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700 p-2">
            <img src={rasm} alt="Restaurant" className="object-cover rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  </header>
  
  );
};
