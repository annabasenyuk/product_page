import founderPicture from '../../assets/founder-pictures.png';

export const AboutFounderSection = () => {
  return (
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
  )
}