import logoPartners from '../../assets/Logo-partners.svg';

export const PartnersSection = () => {
  return (
    <section className='pt-[77px] px-[106px] pb-[113px] flex justify-center flex-col items-center bg-custom-gradient z-0'>
      <div className='font-SofiaPro font-semibold text-[20px] leading-13 tracking-[0.07em] text-textColor07 mb-[15px]'>as seen in</div>
      <img src={logoPartners} alt="Logo partners" className='max-w-[1253px]' />
    </section>
  )
}