import img from '../../assets/images/IMAGE7.png';
export const MenuDish = ({data}) => {
  return (
    <div className='flex md:items-center md:flex-row w-full flex-col gap-4 xl:w-[818px]'>
        <div><img className='ml-4' src={data.image} alt="" /></div>
        <div className='w-full flex  xl:items-end  flex-col md:flex-row justify-between gap-[10px] '>
            <div className=''>
                <p className='text-[26px] ml-4  xl:w-[331px] font-light leading-[42px] tracking-[0.2px]'>{data.dishName}</p>
                <p  className=' xl:w-[420px] ml-4 text-[20px] font-light leading-[42px] tracking-[0.2px]'>{data.description}</p>
            </div>
            <hr className='border-none bg-[#AAAAAA] mb-2 md:block h-[2px] w-full hidden ' />
            <div>
                <p className='text-[30px] ml-4 '>{data.price}</p>
            </div>
            
        </div>
    </div>
  )
}