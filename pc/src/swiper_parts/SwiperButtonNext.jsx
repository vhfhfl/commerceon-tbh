import {useSwiper} from 'swiper/react';

const SwiperButtonNext = (props) => {
  const { children } = props;
  const swiper = useSwiper();
  return (
    <button {...props} className={`flex flex-row items-center justify-center`} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

export default SwiperButtonNext;
