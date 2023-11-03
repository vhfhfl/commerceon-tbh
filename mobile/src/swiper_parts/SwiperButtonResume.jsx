import { useSwiper } from 'swiper/react';

const SwiperButtonResume = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={(evt) => {
        console.log('swiper.autoplay.resume');
        swiper.autoplay.resume();
      }}>
      {children}
    </button>
  );
};

export default SwiperButtonResume;
