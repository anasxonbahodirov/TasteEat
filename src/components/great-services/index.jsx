import React from "react";
import { ContainerWrapper } from "../container-wrapper";
import Kalendar from "../../assets/icons/kalendar";

export const GreatServices = () => {
  return (
    <ContainerWrapper>
      <div className="bg-gray-900 text-gray-300 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 text-center md:text-left">
            <div className=" justify-center md:justify-start items-center gap-4">
              <p className="text-sm uppercase text-yellow-500 font-semibold tracking-widest">
                What We Offer
              </p>
            </div>
            <h2 className="text-3xl font-bold text-gray-100 mt-4">
              Our Great Services
            </h2>
            <p className="mt-4 text-gray-400">
              The atmosphere sets the stage. It's about more than just a dining
              room away from your home. Food takes the spotlight as guests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img
                src={Kalendar}
                alt=""
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-100">
                Opened 24/7
              </h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img
                src={Kalendar}
                alt=""
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-100">
                Special Menus
              </h3>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img
                src={Kalendar}
                alt=""
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-100">
                Home Delivery
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default GreatServices;
