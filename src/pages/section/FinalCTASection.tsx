import arrowRight from '../../assets/icons/arrow-right-icon.svg';
import groupWomen from '../../assets/group-women.png';
import payIcon from '../../assets/icons/pay-icon.svg';
import protectIcon from '../../assets/icons/protect-icon-grey.svg';
import vehicleIconGrey from '../../assets/icons/vehicle-icon-grey.svg';
import basketIcomGrey from '../../assets/icons/basket-icon-grey.svg';
import clockIcon from '../../assets/icons/clock-icon.svg';

export const FinalCTASection = () => {
  return (
    <section className='flex flex-col items-center justify-center py-[84px] bg-custom-gradient2'>
      <h2 className='font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor01 mb-[25px]'>Find something you love.</h2>

      <p className='w-[570px] font-SofiaPro font-semibold text-[15px] text-center leading-17 tracking-[0.01em] text-textColor05 mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>

      <img src={groupWomen} alt="Three women in loungewear" className='max-w-[815px] max-h-[373px] mb-[58px]' />

      <button className="w-[369px] h-[56px] mb-[6px] rounded-[5px] bg-textColor01 flex items-center justify-center text-white font-SuisseIntLight font-normal text-[18px] leading-13 tracking-[0.12em]">
        Customize Your Outfit
        <img src={arrowRight} alt="Arrow right" className='ml-[12px]' />
      </button>

      <div className='flex items-center mb-[10px]'>
        <img src={clockIcon} alt="Clock icon" className='w-[11px] h-[11px] mr-[3px]' />
        <div className='font-SuisseIntLight font-normal text-[10px] leading-18 tracking-[0.04em] text-greenColor'>Ships in 1-2 Days</div>
        <div className='w-[2px] h-[16px] bg-bgColor04 mx-[5px]'></div>
        <img src={payIcon} alt="Pay icons" className='max-w-[243px]' />
      </div>

      <div className='flex'>
        <div className='flex justify-center items-center'>
          <img src={vehicleIconGrey} alt="Cloud icon" className='w-[33px] h-[33px] mr-[12px]' />

          <p className='w-[125px] font-SofiaPro font-medium text-[14px] leading-14 tracking-[0.01em] text-textColor05'>FREE Shipping on Orders over $200</p>
        </div>

        <div className='w-[1px] h-[51px] bg-bgColor04 mx-[40px]'></div>

        <div className='flex justify-center items-center'>
          <img src={protectIcon} alt="Drop icon" className='w-[33px] h-[33px] mr-[12px]' />

          <p className='w-[125px] font-SofiaPro font-medium text-[14px] leading-14 tracking-[0.01em] text-textColor05'>Over 500+ 5 Star Reviews Online</p>
        </div>

        <div className='w-[1px] h-[51px] bg-bgColor04 mx-[40px]'></div>

        <div className='flex justify-center items-center'>
          <img src={basketIcomGrey} alt="Lightning icon" className='w-[33px] h-[33px] mr-[12px]' />

          <p className='w-[125px] font-SofiaPro font-medium text-[14px] leading-14 tracking-[0.01em] text-textColor05'>Made ethically and responsibly.</p>
        </div>
      </div>
    </section>
  )
}