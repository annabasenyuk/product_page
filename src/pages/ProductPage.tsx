import Logo from '../assets/Logo-Byteex.svg';
import basketIcon from '../assets/icons/basket-icon.svg';
import dayNightIcon from '../assets/icons/day-night-icon.svg';
import waveIcon from '../assets/icons/wave-icon.svg';
import arrowRight from '../assets/icons/arrow-right-icon.svg';
import threeWomen from '../assets/three-women.png';
import womanPicture from '../assets/woman-picture.png';
import starsIcon from '../assets/icons/stars-icon.svg';
import logoPartners from '../assets/Logo-partners.svg';
import leafIcon from '../assets/icons/leaf-icon.svg';
import womanInWhiteRobe from '../assets/woman-in-white-robe.png';
import whiteRobe1 from '../assets/group-robe/white-robe-1.png';
import whiteRobe2 from '../assets/group-robe/white-robe-2.png';

export const ProductPage = () => {
  return (
    <div className="">
      <section className="h-screen relative  ">
        <div className="bg w-full h-[36px] bg-neutralColor flex items-center justify-center mb-[33px]">
          <p className="font-SuisseInt font-normal text-[11px] leading-11 tracking-[0.03em] text-textColor04">CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)  |  FREE SHIPPING on orders {'>'} $200  |  easy 45 day return window.</p>
        </div>

        <img src={Logo} alt="Logo Byteex" className="w-[200px] ml-[96px] mb-[62px] mt-[69px]" />

        <div className='flex justify-between ml-[102px]'>
          <div className='w-[592px]'>
            <h1 className='font-SofiaPro font-semibold text-[38px] leading-12 text-textColor01 tracking-[0.03em] mb-[25px]'>Don’t apologize for being comfortable.</h1>

            <div className='mb-[35px]'>
              <div className='flex mb-[23px]'>
                <img src={dayNightIcon} alt="Icon day and night" className='w-[31px] h-[31px] mr-[13px]' />

                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor05">Beautiful, comfortable loungewear for day or night.</p>
              </div>

              <div className='flex mb-[23px]'>
                <img src={basketIcon} alt="Icon basket" className='w-[31px] h-[31px] mr-[13px]' />

                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor05">No wasteful extras, like tags or plastic packaging.</p>
              </div>

              <div className='flex'>
                <img src={waveIcon} alt="Icon wave" className='w-[31px] h-[31px] mr-[13px]' />

                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor05">Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.</p>
              </div>
            </div>

            <button className="w-[362px] h-[56px] rounded-[5px] bg-textColor01 flex items-center justify-center text-white font-SuisseIntLight font-normal text-[18px] leading-13 tracking-[0.12em] relative">
              Customize Your Outfit
              <img src={arrowRight} alt="Arrow right" className='absolute bottom-0 right-0 mr-[45px] mb-[8px]' />
            </button>
          </div>

          <img src={threeWomen} alt="Three women in comfortable loungewear" className='w-[725px]' />
        </div>

        <div className='absolute w-[416px] rounded-[4px] px-[19px] py-[16px] border border-solid border-borderColor shadow-shadow00 ml-[106px] bottom-0 transform translate-y-1/2 '>
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

      <section className='pt-[77px] px-[106px] flex justify-center flex-col items-center'>
        <div className='font-SofiaPro font-semibold text-[20px] leading-13 tracking-[0.07em] text-textColor07 mb-[15px]'>as seen in</div>
        <img src={logoPartners} alt="Logo partners" className='max-w-[1253px]' />
      </section>

      <section className='pt-[110px] flex h-screen items-center'>
        {/* <div className='ml-[136px]'> */}
        <div className='ml-[136px]'>
          <h2 className="font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor01 mb-[74px] ml-[7px]">Loungewear you can be proud of.</h2>

          <div className='mb-[35px]'>
            <div className='flex mb-[23px]'>
              <img src={basketIcon} alt="Icon day and night" className='w-[31px] h-[31px] mr-[32px]' />

              <div className="w-[470px]">
                <h3 className="font-SofiaPro font-semibold text-[22px] leading-15 tracking-[0.01em] text-textColor01 mb-[14px]">Ethically sourced.</h3>
                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor08">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
              </div>
            </div>

            <div className='flex mb-[23px]'>
              <img src={leafIcon} alt="Icon day and night" className='w-[31px] h-[31px] mr-[32px]' />

              <div className="w-[470px]">
                <h3 className="font-SofiaPro font-semibold text-[22px] leading-15 tracking-[0.01em] text-textColor01 mb-[14px]">Responsibly made.</h3>
                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor08">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
              </div>
            </div>

            <div className='flex mb-[23px]'>
              <img src={dayNightIcon} alt="Icon basket" className='w-[31px] h-[31px] mr-[32px]' />

              <div className="w-[470px]">
                <h3 className="font-SofiaPro font-semibold text-[22px] leading-15 tracking-[0.01em] text-textColor01 mb-[14px]">Made for living in.</h3>
                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor08">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
              </div>
            </div>

            <div className='flex'>
              <img src={waveIcon} alt="Icon wave" className='w-[31px] h-[31px] mr-[32px]' />

              <div className="w-[470px]">
                <h3 className="font-SofiaPro font-semibold text-[22px] leading-15 tracking-[0.01em] text-textColor01 mb-[14px]">Unimaginably comfortable.</h3>
                <p className="font-SofiaPro font-medium text-[15px] leading-13 tracking-[0.01em] text-textColor08">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='relative'>
            <img src={womanInWhiteRobe} alt="Woman in white loungewear" className='w-[433px]' />
            <div className='flex'>
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe2} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='mr-[7px]' />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}