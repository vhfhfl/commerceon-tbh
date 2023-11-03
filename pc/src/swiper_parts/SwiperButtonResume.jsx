import {useSwiper} from 'swiper/react';

const SwiperButtonResume = (props) => {
  const { children, className, refdata, callback } = props;
  const swiper = useSwiper();
  return (
    <button
      ref={refdata}
      className={`${className} flex flex-row items-center justify-center`}
      onClick={(evt) => {
        console.log('swiper.autoplay.resume');
        swiper.autoplay.resume();
        if (callback) callback();
      }}>
      {children}
    </button>
  );
};

export default SwiperButtonResume;
