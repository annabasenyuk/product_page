import arrowRight from '../../assets/icons/arrow-right-icon.svg';
import starsIcon from '../../assets/icons/stars-icon.svg';
import differentWomen from '../../assets/different-women.png';

export const UserGeneratedContentSection = () => {
  return (
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
  )
}