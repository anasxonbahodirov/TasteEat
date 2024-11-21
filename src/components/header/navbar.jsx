import { SecondaryButton } from "../secondaryButton";
import logo from "../../assets/icons/logo.svg";
import { PrimaryButton } from "../primaryButton";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import { HamburgerMenu } from "../../assets/icons/hamburger-menu";

export const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 p-4">
        <SecondaryButton>Call - 123 456 789</SecondaryButton>
        <div className="flex justify-center my-4 md:my-0">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        <PrimaryButton>Reservation</PrimaryButton>
      </div>
      <div className="md:hidden flex justify-end p-4 bg-gray-800">
        <HamburgerMenu className="fill-yellow-500 w-10 h-10" />
      </div>
      <nav className="hidden md:flex justify-between items-center p-4 bg-gray-800 text-gray-300">
        <ul className="flex gap-8">
          <li>
            <a href="#" className="text-yellow-500 hover:text-yellow-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Our Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={pinterest} alt="Pinterest" />
          </a>
        </div>
      </nav>
    </div>
  );
};
