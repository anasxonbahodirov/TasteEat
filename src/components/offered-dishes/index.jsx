import React from "react";
import { ContainerWrapper } from "../container-wrapper";
import Gamburger from '../../assets/icons/gamburger'

export const OfferedDishes = () => {
  return (
    <section>
      <ContainerWrapper>
        <section className="relative w-full max-w-[1360px] mx-auto py-16">
          <section className="text-center mb-12">
            <div className="w-[78px] h-px bg-[#e1b168] mx-auto" />
            <h2 className="text-[#292e36] text-sm tracking-[3px] mt-2 uppercase">
              Offers
            </h2>
            <h1 className="text-[#292e36] text-4xl font-bold mt-4">
              Our Offer Dishes
            </h1>
            <p className="text-[#555555] text-lg mt-4 leading-7">
              Our chefs create melt-in-your-mouth dishes that'll satiate
              even the fussiest eaters. Now the dishes are in offers. Use it
              based on hunger.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f2f8fd] p-8 flex items-center rounded-lg shadow-lg">
              <div>
                <div className="bg-white border border-[#dcdcdc] rounded-full shadow-md p-4 inline-block">
                  <p className="text-[#292e36] text-sm font-medium">ONLY</p>
                  <p className="text-[#292e36] text-4xl font-bold">$10</p>
                </div>
                <div className="mt-6">
                  <p className="text-[#292e36] text-sm tracking-widest font-medium">
                    50% OFFER GOING
                  </p>
                  <h3 className="text-[#292e36] text-2xl font-semibold mt-2">
                    Chicken Burger
                  </h3>
                  <p className="text-[#555555] text-base mt-2">
                    Chicken burger with the tasty toppings and leaves.
                  </p>
                </div>
              </div>
              <Gamburger className="w-44 h-44 ml-auto rounded-full"/>
            </div>

            <div className="bg-[#f6f6f6] p-8 flex items-center rounded-lg shadow-lg">
              <div>
                <div className="bg-[#292e36] text-white border border-[#292e36] rounded-full shadow-md p-4 inline-block">
                  <p className="text-sm font-medium">ONLY</p>
                  <p className="text-4xl font-bold">$9</p>
                </div>
                <div className="mt-6">
                  <p className="text-[#292e36] text-sm tracking-widest font-medium">
                    50% OFFER GOING
                  </p>
                  <h3 className="text-[#292e36] text-2xl font-semibold mt-2">
                    Chicken Pizza
                  </h3>
                  <p className="text-[#555555] text-base mt-2">
                    Pizza with multiple flavor and the toppings are mixed.
                  </p>
                </div>
              </div>
              <Gamburger className="w-44 h-44 ml-auto rounded-full"/>
            </div>
          </div>
        </section>
      </ContainerWrapper>
    </section>
  );
};
