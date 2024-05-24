import threeWomenInLoungewear from '../../assets/three-women-in-loungewear.png';

export const FAQSection = () => {
  return (
    <section className='h-screen flex items-center justify-between pl-[211px] pr-[105px]'>
      <div>
        <h2 className='font-SofiaPro font-semibold text-[32px] leading-16 tracking-[0.01em] text-textColor01 mb-[50px]'>Frequently asked questions.</h2>

        <div></div>
      </div>

      <img src={threeWomenInLoungewear} alt="Three women in loungewear" className='w-[430px]' />
    </section>
  )
}