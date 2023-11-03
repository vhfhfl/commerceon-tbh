import {useSwiper} from 'swiper/react';

const SwiperButtonPause = function SwiperButtonPause(props) {
  const { children, className, refdata, callback } = props;

  const swiper = useSwiper();

  return (
    <button
      ref={refdata}
      className={`${className} flex flex-row items-center justify-center ${className}`}
      onClick={(evt) => {
        console.log('swiper.autoplay.pause');
        swiper.autoplay.pause();
        if (callback) callback();
      }}>
      {children}
    </button>
  );
};

export default SwiperButtonPause;
