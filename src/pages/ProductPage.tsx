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
import founderPicture from '../assets/founder-pictures.png';
import vehicleIconOriginal from '../assets/icons/vehicle-icon-original.svg';
import basketIconOriginal from '../assets/icons/basket-icon-original.svg';
import dayNightIconOriginal from '../assets/icons/day-night-icon-original.svg';
import differentWomen from '../assets/different-women.png';
import threeWomenInLoungewear from '../assets/three-women-in-loungewear.png';
import lightningIcon from '../assets/icons/lightning-icon.svg';
import cloudIcon from '../assets/icons/cloud-icon.svg';
import dropIcon from '../assets/icons/drop-icon.svg';

export const ProductPage = () => {
  return (
    <div className="">
      <section className="h-screen relative  ">
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

      <section className='pt-[77px] px-[106px] pb-[113px] flex justify-center flex-col items-center'>
        <div className='font-SofiaPro font-semibold text-[20px] leading-13 tracking-[0.07em] text-textColor07 mb-[15px]'>as seen in</div>
        <img src={logoPartners} alt="Logo partners" className='max-w-[1253px]' />
      </section>

      <section className='flex justify-between content-between h-screen'>
        {/* <div className='ml-[136px]'> */}
        <div className='pl-[136px] flex flex-col items-stretch'>
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

        <div className='mr-[66px]'>
          <div className='relative mb-[13px]'>
            <img src={womanInWhiteRobe} alt="Woman in white loungewear" className='max-w-[433px] max-h-[648px]' />

            <div className='flex items-center justify-center absolute bottom-0 w-full'>
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe2} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px] mr-[7px]' />
              <img src={whiteRobe1} alt="different options of the robe" className='w-[31px] h-[32px]' />
            </div>
          </div>

          <div className='font-SuisseIntLight font-semibold text-[13px] leading-17 tracking-[0.04em] text-textColor05 text-center'>White Robe</div>
        </div>
      </section>

      <section className='h-screen flex justify-between items-center bg-bgColor02 pl-[123px] pr-[99px]'>
        <div>
          <img src={founderPicture} alt="Founder pictures" className='max-w-[523px]' />
        </div>

        <div className='w-[619px]'>
          <h2 className="font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor09 mb-[30px]">Be your best self.</h2>

          <div className='mb-[29px]'>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08 mb-[23px]'>Hi! My name’s [Insert Name], and I founded [Insert] in ____. </p>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08 mb-[23px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. </p>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08 mb-[23px]'>Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.</p>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08 mb-[23px]'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.</p>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08 mb-[23px]'>Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. </p>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08 mb-[23px]'>Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. </p>
            <p className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor08'>Cras mattis varius mollis.</p>
          </div>

          <button className="w-[356px] h-[56px] rounded-[5px] bg-textColor01 flex items-center justify-center text-white font-SuisseIntLight font-normal text-[18px] leading-13 tracking-[0.12em] relative">
            Customize Your Outfit
          </button>
        </div>
      </section>

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

      <section className='pb-[74px] flex flex-col items-center'>
        <h2 className='font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor01 mb-[30px]'>What are our fans saying?</h2>
        <p className='w-[560px] font-SofiaPro font-semibold text-[15px] text-center leading-13 tracking-[0.01em] text-textColor05 mb-[55px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p>
        <img src={differentWomen} alt="Picture different women in loungewear" className='w-full  mb-[76px]' />
        <div className='mb-[63px] flex'>
          <div className='mr-[49px] flex flex-col justify-center items-center w-[338px] rounded-[8px] border border-borderColor01 shadow-shadow01 py-[29px] px-[39px]'>
            <div className='flex w-full mb-[12px]'>
              <div className='w-[39px] h-[39px] bg-bgColor03 rounded-[20px] mr-[13px]'></div>
              <div>
                <img src={starsIcon} alt="Rating with stars" className='w-[60px]' />
                <div className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor05'>Jane, S.</div>
              </div>
            </div>

            <p className='font-SuisseIntLight font-normal text-[12px] leading-13 tracking-[0.04em] text-textColor05'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.</p>
          </div>

          <div className='mr-[49px] flex flex-col justify-center items-center w-[338px] rounded-[8px] border border-borderColor01 shadow-shadow01 py-[29px] px-[39px]'>
            <div className='flex w-full mb-[12px]'>
              <div className='w-[39px] h-[39px] bg-bgColor03 rounded-[20px] mr-[13px]'></div>
              <div>
                <img src={starsIcon} alt="Rating with stars" className='w-[60px]' />
                <div className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor05'>Jane, S.</div>
              </div>
            </div>

            <p className='font-SuisseIntLight font-normal text-[12px] leading-13 tracking-[0.04em] text-textColor05'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.</p>
          </div>

          <div className='flex flex-col justify-center items-center w-[338px] rounded-[8px] border border-borderColor01 shadow-shadow01 py-[29px] px-[39px]'>
            <div className='flex w-full mb-[12px]'>
              <div className='w-[39px] h-[39px] bg-bgColor03 rounded-[20px] mr-[13px]'></div>
              <div>
                <img src={starsIcon} alt="Rating with stars" className='w-[60px]' />
                <div className='font-SofiaPro font-semibold text-[15px] leading-13 tracking-[0.01em] text-textColor05'>Jane, S.</div>
              </div>
            </div>

            <p className='font-SuisseIntLight font-normal text-[12px] leading-13 tracking-[0.04em] text-textColor05'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.</p>
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

      <section className='h-screen flex items-center justify-between pl-[211px] pr-[105px]'>
        <div>
          <h2 className='font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor01 mb-[50px]'>Frequently asked questions.</h2>

          <div></div>
        </div>

        <img src={threeWomenInLoungewear} alt="Three women in loungewear" className='w-[430px]' />
      </section>

      <section className='bg-bgColor02 py-[39px] flex flex-col items-center'>
        <h2 className='font-SofiaPro font-semibold text-[25px] leading-16 tracking-[0.1em] text-textColor01 mb-[18px]'>Our total green impact</h2>

        <div className='flex'>
          <div className='flex flex-col justify-center items-center'>
            <img src={cloudIcon} alt="Cloud icon" className='w-[42px] h-[42px] mb-[13px]' />
            <h3 className='font-SofiaPro font-semibold text-[22px] leading-14 tracking-[0.01em] text-textColor01 mb-[5px]'>3,927 kg</h3>
            <p className='font-SofiaPro font-medium text-[14px] leading-14 tracking-[0.01em] text-textColor01'>of CO2 saved</p>
          </div>

          <div className='w-[1px] h-[122px] bg-bgColor04 mx-[40px]'></div>

          <div className='flex flex-col justify-center items-center'>
            <img src={dropIcon} alt="Drop icon" className='w-[42px] h-[42px] mb-[13px]' />
            <h3 className='font-SofiaPro font-semibold text-[22px] leading-14 tracking-[0.01em] text-textColor01 mb-[5px]'>2,546,167 days</h3>
            <p className='font-SofiaPro font-medium text-[14px] leading-14 tracking-[0.01em] text-textColor01'>of drinking water saved</p>
          </div>

          <div className='w-[1px] h-[122px] bg-bgColor04 mx-[40px]'></div>

          <div className='flex flex-col justify-center items-center'>
            <img src={lightningIcon} alt="Lightning icon" className='w-[42px] h-[42px] mb-[13px]' />
            <h3 className='font-SofiaPro font-semibold text-[22px] leading-14 tracking-[0.01em] text-textColor01 mb-[5px]'>7,321 kWh</h3>
            <p className='font-SofiaPro font-medium text-[14px] leading-14 tracking-[0.01em] text-textColor01'>of energy saved</p>
          </div>
        </div>
      </section>
    </div>
  )
}