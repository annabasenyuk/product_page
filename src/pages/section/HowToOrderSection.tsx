import vehicleIconOriginal from '../../assets/icons/vehicle-icon-original.svg';
import basketIconOriginal from '../../assets/icons/basket-icon-original.svg';
import dayNightIconOriginal from '../../assets/icons/day-night-icon-original.svg';
import arrowRight from '../../assets/icons/arrow-right-icon.svg';
import starsIcon from '../../assets/icons/stars-icon.svg';

export const HowToOrderSection = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center'>
      <h2 className='font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor01 mb-[46px]'>Comfort made easy</h2>

      <div className='flex mb-[56px]'>
        <div className='flex flex-col justify-center items-center w-[346px] h-[321px] rounded-[8px] border border-borderColor bg-bgColor02 mr-[41px]'>
          <img src={basketIconOriginal} alt="Basket Icon" className='w-[51px] h-[51px] mb-[16px]' />

          <h3 className='font-SofiaPro font-semibold text-[22px] leading-16 tracking-[0.01em] text-textColor01 mb-[19px]'>You save.</h3>

          <p className=' w-[275px] font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor05'>Browse our comfort sets and save 15% when you bundle.</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[346px] h-[321px] rounded-[8px] border border-borderColor bg-bgColor01 mr-[41px]'>
          <img src={vehicleIconOriginal} alt="vehicle icon" className='w-[69px] h-[51px] mb-[16px]' />

          <h3 className='font-SofiaPro font-semibold text-[22px] leading-16 tracking-[0.01em] text-textColor01 mb-[19px]'>We ship.</h3>

          <p className=' w-[275px] font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor05'>We ship your items within 1-2 days of receiving your order.</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[346px] h-[321px] rounded-[8px] border border-borderColor bg-bgColor02'>
          <img src={dayNightIconOriginal} alt="Day and night icon" className='w-[51px] h-[51px] mb-[16px]' />

          <h3 className='font-SofiaPro font-semibold text-[22px] leading-16 tracking-[0.01em] text-textColor01 mb-[19px]'>You enjoy!</h3>

          <p className=' w-[275px] font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor05'>Wear hernest around the house, out on the town, or in bed.</p>
        </div>
      </div>

      <button className="w-[369px] h-[56px] mb-[11px] rounded-[5px] bg-textColor01 flex items-center justify-center text-white font-SuisseIntLight font-normal text-[18px] leading-13 tracking-[0.12em] relative">
        Customize Your Outfit
        <img src={arrowRight} alt="Arrow right" className='ml-[12px]' />
      </button>

      <div className='flex items-center justify-center'>
        <img src={starsIcon} alt="Rating with stars" className='w-[80px] mr-[14px]' />
        <div className='font-SuisseIntLight font-normal text-[12px] leading-14 tracking-[0.04em] text-textColor06'>One of 500+ 5 Star Reviews Online</div>
      </div>
    </section>
  )
}