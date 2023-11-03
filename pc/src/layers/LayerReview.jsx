import ReviewSwiper from '@/swipers/ReviewSwiper';
import Image from 'next/image';

function LayerReview() {
  return (
    <div className={`LayerReview w-[1000px]`}>
      <button
        className={`absolute -top-[calc(13px+25px)] right-[14px] z-10`}
        >
        <Image src={`/icons/zco_31.svg`} width={26} height={25} alt='' />
      </button>
      <ReviewSwiper />
    </div>
  );
}

export default LayerReview;
