import { ContainerWrapper } from "../container-wrapper";
import { Slider } from "./slider";

export const ClientsComments = () => {
  return (
    <section>
      <ContainerWrapper>
        <div className="bg-primary-blue w-full py-16 mt-[200px]">
          <div className="mt-20 ml-10 lg:ml-20 text-left">
            <hr className="border-none bg-[#E1B168] h-[2px] w-[114px] mb-2" />
            <p className="text-[#FFFFFF] text-sm uppercase tracking-[3px] mb-1">
              Testimonial
            </p>
            <hr className="border-none bg-[#E1B168] h-[2px] w-[114px] mb-4" />
            <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2px]">
              Our Clients Say
            </p>
            <p className="text-gray-300 text-base md:text-lg mt-2 max-w-xl">
              We love to hear from customers, so please leave a comment or say
              hello in an email.
            </p>
          </div>

          <Slider />
        </div>
      </ContainerWrapper>
    </section>
  );
};
