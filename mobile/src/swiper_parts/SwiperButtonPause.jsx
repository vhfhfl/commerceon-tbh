import { useSwiper } from 'swiper/react';

const SwiperButtonPause = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={(evt) => {
        console.log('swiper.autoplay.pause');
        swiper.autoplay.pause();
      }}>
      {children}
    </button>
  );
};

export default SwiperButtonPause;
