import { ContainerWrapper } from "../container-wrapper";
import coffee from "../../assets/icons/coffee.svg";
import {menu} from "./static"
import { MenuDish } from "./menu-dish";


export const MenuSection = () => {
  return (
    <section className="bg-white pt-[119px]    ">
       <ContainerWrapper>
        <div className="gap-44 xl:flex ">
         <div className="flex flex-col xl:ml-0 ml-4 gap-8">
         <p className="font-normal text-[20px] xl:text-[25px] xl:leading-[22px] tracking-[3px] ">Menu</p>
            <p className="font-normal xl:w-[400px] text-[40px] xl:leading-[56px] tracking-[0.2px]  xl:text-[40px]">Try Our Special dishes</p>
            <p className="font-normal xl:text-[20px] text-[20px] leading-[30px] xl:w-[500px] tracking-[0.2px] ">Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
             <img className="w-[275px] xl:w-[398px] xl:h-[548px] " src={coffee} alt="" />
             <div className="group duration-300">
             <button className="leading-[33px] font-normal text-[17px] hover:bg-[#724f1b] xl:px-[57px] py-[20px] px-[40px] xl:py-5 hover:text-white border-2 border-[#724f1b] text-[#724f1b] ">See all dishes</button>
             </div>
         </div>
         <div className="mt-11  ">
           {
             menu.map((el,i)=>{
                return (
                  <div key={i}>
                    <p className="mb-[40px] ml-4 text-[35px] font-light mt-5  ">{el.name}</p>
                    <div className="flex flex-col gap-[50px] ">
                      {
                        el.dishes.map((dish , i)=>{
                           return <MenuDish key={i} data={dish}/>
                        })
                      }
                    </div>
                  </div>
                )
                
             })
           }
         </div>
        </div>
       </ContainerWrapper>
    </section>
  )
}