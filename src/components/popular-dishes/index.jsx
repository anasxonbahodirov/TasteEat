import tovuq from "../../assets/images/chikken.png";
import hotdog from "../../assets/images/hotdog.png";
import sharbat from "../../assets/images/sharbat.png";
import burger from "../../assets/images/burger.png";
import { ContainerWrapper } from "../container-wrapper";

export const PopularDishes = () => {
  return (
    <ContainerWrapper>
      <section className="relative w-full max-w-[1360px] mx-auto h-auto">
        <div className="text-center py-8">
          <h2 className="text-[#292e36] text-[15px] tracking-[3px]  mb-2">
            Menu
          </h2>
          <h1 className="text-[#292e36] text-[30px] md:text-[36px] lg:text-[40px] font-serif mb-4">
            Popular Dishes
          </h1>
          <p className="text-[#555555] text-sm md:text-lg lg:text-xl leading-[30px] max-w-[760px] mx-auto">
            There is a game between the waiters in restaurant to see who serves
            the food to each table fastest. That led to attempting the Guinness
            Record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="flex flex-col items-center">
            <img
              className="w-full h-[200px] md:h-[250px] lg:h-[307px] object-cover"
              alt=""
              src={tovuq}
            />
            <div className="w-full border-t border-[#dcdcdc] mt-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  Chicken Manjoori
                </h3>
                <p className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  $15
                </p>
              </div>
              <p className="text-[#555555] text-sm md:text-base lg:text-lg leading-[30px]">
                Dish relished by all age groups as a starter dish at parties.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-full h-[200px] md:h-[250px] lg:h-[307px] object-cover"
              alt=""
              src={hotdog}
            />
            <div className="w-full border-t border-[#dcdcdc] mt-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  Hotdog
                </h3>
                <p className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  $10
                </p>
              </div>
              <p className="text-[#555555] text-sm md:text-base lg:text-lg leading-[30px]">
                Grilled sausage served in the slit of a partially sliced bun.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-full h-[200px] md:h-[250px] lg:h-[307px] object-cover"
              alt=""
              src={sharbat}
            />
            <div className="w-full border-t border-[#dcdcdc] mt-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  Fresh Salmon
                </h3>
                <p className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  $5
                </p>
              </div>
              <p className="text-[#555555] text-sm md:text-base lg:text-lg leading-[30px]">
                Beat the health blues with our Super Immune Blue Juice Recipe.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-full h-[200px] md:h-[250px] lg:h-[307px] object-cover"
              alt=""
              src={burger}
            />
            <div className="w-full border-t border-[#dcdcdc] mt-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  Veg Burger
                </h3>
                <p className="text-[#292e36] text-lg md:text-2xl lg:text-3xl font-bold">
                  $10
                </p>
              </div>
              <p className="text-[#555555] text-sm md:text-base lg:text-lg leading-[30px]">
                Burgers may be made from ingredients like beans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContainerWrapper>
  );
};

export default PopularDishes;
