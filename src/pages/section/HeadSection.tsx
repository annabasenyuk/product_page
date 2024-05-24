import Logo from '../../assets/Logo-Byteex.svg';
import threeWomen from '../../assets/three-women.png';
import womanPicture from '../../assets/woman-picture.png';
import basketIcon from '../../assets/icons/basket-icon.svg';
import dayNightIcon from '../../assets/icons/day-night-icon.svg';
import waveIcon from '../../assets/icons/wave-icon.svg';
import arrowRight from '../../assets/icons/arrow-right-icon.svg';
import starsIcon from '../../assets/icons/stars-icon.svg';


export const HeadSection = () => {
  return (
    <section className="h-screen relative">
      <div className="w-full h-[36px] bg-neutralColor flex items-center justify-center mb-[33px]">
        <p className="font-SuisseInt font-normal text-[11px] leading-11 tracking-[0.03em] text-textColor04">CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)  |  FREE SHIPPING on orders {'>'} $200  |  easy 45 day return window.</p>
      </div>

      <img src={Logo} alt="Logo Byteex" className="w-[200px] ml-[96px] mb-[62px]" />

      <div className='flex justify-between ml-[102px]'>
        <div className='w-[500px]'>
          <h1 className='font-SofiaPro font-semibold text-[38px] leading-12 text-textColor01 tracking-[0.03em] mb-[25px]'>Don’t apologize for being comfortable.</h1>

          <div className='mb-[35px] w-[425px]'>
            <div className='flex items-center mb-[23px]'>
              <img src={dayNightIcon} alt="Icon day and night" className='w-[31px] h-[31px] mr-[13px]' />

              <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor05">Beautiful, comfortable loungewear for day or night.</p>
            </div>

            <div className='flex items-center mb-[23px]'>
              <img src={basketIcon} alt="Icon basket" className='w-[31px] h-[31px] mr-[13px]' />

              <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor05">No wasteful extras, like tags or plastic packaging.</p>
            </div>

            <div className='flex items-center'>
              <img src={waveIcon} alt="Icon wave" className='w-[31px] h-[31px] mr-[13px]' />

              <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor05">Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
            </div>
          </div>

          <button className="w-[362px] h-[56px] rounded-[5px] bg-textColor01 flex items-center justify-center text-white font-SuisseIntLight font-normal text-[18px] leading-13 tracking-[0.12em] relative">
            Customize Your Outfit
            <img src={arrowRight} alt="Arrow right" className='absolute bottom-0 right-0 mr-[45px] mb-[8px]' />
          </button>
        </div>

        <img src={threeWomen} alt="Three women in comfortable loungewear" className='max-w-[725px] mr-[62px]' />
      </div>

      <div className='absolute w-[416px] rounded-[4px] px-[19px] py-[16px] border border-solid border-borderColor shadow-shadow00 ml-[106px] bottom-0 transform translate-y-1/2 z-20 bg-white'>
        <div className='flex justify-between mb-[12px]'>
          <div className='flex items-center justify-center'>
            <img src={womanPicture} alt="woman picture" className='w-[39px] h-[39px] mr-[14px]' />

            <div className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.07em] text-textColor05'>Amy P.</div>
          </div>

          <div className='flex items-center justify-center'>
            <img src={starsIcon} alt="Rating with stars" className='w-[60px] mr-[7px]' />
            <div className='font-SuisseIntLight font-normal text-[11px] leading-14 tracking-[0.04em] text-textColor06'>One of 500+ 5 Star Reviews Online</div>
          </div>
        </div>

        <p className='font-SuisseIntLight font-normal text-[12px] leading-13 tracking-[0.04em] text-textColor05'>Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. </p>
      </div>
    </section>
  )
}