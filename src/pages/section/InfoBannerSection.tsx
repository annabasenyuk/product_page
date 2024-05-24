import lightningIcon from '../../assets/icons/lightning-icon.svg';
import cloudIcon from '../../assets/icons/cloud-icon.svg';
import dropIcon from '../../assets/icons/drop-icon.svg';

export const InfoBannerSection = () => {
  return (
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

  )
}