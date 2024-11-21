import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ContainerWrapper } from "../container-wrapper";
import natasha from "../../assets/images/natasha.png";

export const Slider = () => {
  return (
    <ContainerWrapper>
      <div className="ml-4 md:ml-10 lg:ml-20 mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
            1280: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          <SwiperSlide>
            <div className="bg-[#343942] w-full max-w-[360px] lg:max-w-[544px] h-[285px] p-6 rounded-lg flex flex-col text-white mx-auto">
              <div className="flex items-center mb-4">
                <img
                  src={natasha}
                  alt="Natasha"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Natasha D</h3>
                  <p className="text-[#E1B168]">New York</p>
                </div>
              </div>
              <p className="text-gray-300">
                They are known for their fabulous taste and food. Anywhere you
                go, your hunger is satisfied. The best chicken & burgers are
                yummy.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#343942] w-full max-w-[360px] lg:max-w-[544px] h-[285px] p-6 rounded-lg flex flex-col text-white mx-auto">
              <div className="flex items-center mb-4">
                <img
                  src={natasha}
                  alt="Jack Sparrow"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Jack Sparrow</h3>
                  <p className="text-[#E1B168]">Salt Lake City</p>
                </div>
              </div>
              <p className="text-gray-300">
                I have visited this fantastic restaurant on several occasions;
                the food is absolutely outstanding & attention to detail is in a
                league of its own.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#343942] w-full max-w-[360px] lg:max-w-[544px] h-[285px] p-6 rounded-lg flex flex-col text-white mx-auto">
              <div className="flex items-center mb-4">
                <img
                  src={natasha}
                  alt="Martin"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Martin</h3>
                  <p className="text-[#E1B168]">San Diego</p>
                </div>
              </div>
              <p className="text-gray-300">
                Perfectly known for amazing food. Anywhere you go, they give the
                best fried chicken. Highly recommended.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#343942] w-full max-w-[360px] lg:max-w-[544px] h-[285px] p-6 rounded-lg flex flex-col text-white mx-auto">
              <div className="flex items-center mb-4">
                <img
                  src={natasha}
                  alt="Another User"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Jack</h3>
                  <p className="text-[#E1B168]">US</p>
                </div>
              </div>
              <p className="text-gray-300">
                This place is simply outstanding with unmatched service and
                quality of food. Highly recommended for everyone.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#343942] w-full max-w-[360px] lg:max-w-[544px] h-[285px] p-6 rounded-lg flex flex-col text-white mx-auto">
              <div className="flex items-center mb-4">
                <img
                  src={natasha}
                  alt="Last User"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Mr Beast</h3>
                  <p className="text-[#E1B168]">UC</p>
                </div>
              </div>
              <p className="text-gray-300">
                Incredible experience, friendly staff, and food that leaves you
                craving for more. A must-visit place!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </ContainerWrapper>
  );
};
