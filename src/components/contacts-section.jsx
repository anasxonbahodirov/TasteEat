import InterestingPhoto from "../assets/images/interesting-photo";
import { Location } from "../assets/icons/location";
import { ContainerWrapper } from "./container-wrapper";


export const ContactsSection = () => {
  return (
    <section className="bg-white-1 pt-[100px] pb-[60px]">
      <ContainerWrapper>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-start xl:items-center xl:justify-between">
          <div className="flex items-center xl:gap-5 gap-2">
            <a href="#" className="bg-primary-blue p-[12px] rounded-full">
              <Location
                className={
                  "w-[38px] h-[38px] md:w-[40px] md:h-[40px] xl:w-auto"
                }
              />
            </a>
            <div>
              <p className="text-primary-blue text-[22px] xl:text-[30px] xl:leading-[39px] tracking-[0.2px] font-normal">
                Locate Us
              </p>
              <p className="text-secondary-blue text-[17px] xl:text-[20px] xl:leading-[30px] tracking-[0.2px] font-normal">
                Riverside 25, San Diego, California
              </p>
            </div>
          </div>
          <div className="flex items-center xl:gap-5 gap-2">
            <a href="#" className="bg-primary-blue p-[12px] rounded-full">
              <Location
                className={
                  "w-[38px] h-[38px] md:w-[40px] md:h-[40px] xl:w-auto"
                }
              />
            </a>
            <div>
              <p className="text-primary-blue text-[22px] xl:text-[30px] xl:leading-[39px] tracking-[0.2px] font-normal">
                Locate Us
              </p>
              <p className="text-secondary-blue text-[17px] xl:text-[20px] xl:leading-[30px] tracking-[0.2px] font-normal">
                Riverside 25, San Diego, California
              </p>
            </div>
          </div>
          <div className="flex items-center xl:gap-5 gap-2">
            <a href="#" className="bg-primary-blue p-[12px] rounded-full">
              <Location
                className={
                  "w-[38px] h-[38px] md:w-[40px] md:h-[40px] xl:w-auto"
                }
              />
            </a>
            <div>
              <p className="text-primary-blue text-[22px] xl:text-[30px] xl:leading-[39px] tracking-[0.2px] font-normal">
                Locate Us
              </p>
              <p className="text-secondary-blue text-[17px] xl:text-[20px] xl:leading-[30px] tracking-[0.2px] font-normal">
                Riverside 25, San Diego, California
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center p-4 md:p-10 max-w-full mt-24 ">
          <div className="w-full max-w-md md:max-w-lg">
          </div>
          <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Delicious Story
            </h2>
            <p className="mt-2 text-sm md:text-base">
              The people, food, and the prime locations make the perfect place
              for friends & family to come together and have a great time.
            </p>
            <div className="flex justify-between mt-6 text-sm md:text-base">
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold">2018</h3>
                <p>Plan for this restaurant to deliver healthy food.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold">2022</h3>
                <p>Happily in the fourth year by fulfilling the motto.</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-semibold">JOSEFINE</p>
              <img
                src=""
                alt="imzo"
                className="w-24 h-auto mt-2 mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>

      </ContainerWrapper>
    </section>
  );
};
