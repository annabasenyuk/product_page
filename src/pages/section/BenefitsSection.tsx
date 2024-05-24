import basketIcon from '../../assets/icons/basket-icon.svg';
import dayNightIcon from '../../assets/icons/day-night-icon.svg';
import waveIcon from '../../assets/icons/wave-icon.svg';
import leafIcon from '../../assets/icons/leaf-icon.svg';
import womanInWhiteRobe from '../../assets/woman-in-white-robe.png';
import whiteRobe1 from '../../assets/group-robe/white-robe-1.png';
import whiteRobe2 from '../../assets/group-robe/white-robe-2.png';

export const BenefitsSection = () => {
  return (
    <section className='flex justify-between content-between h-screen'>
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
  )
}