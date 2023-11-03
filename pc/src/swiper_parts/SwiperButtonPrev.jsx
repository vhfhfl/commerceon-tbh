import {useSwiper} from 'swiper/react';

const SwiperButtonPrev = (props) => {
  const { children } = props;
  const swiper = useSwiper();
  return <button {...props} onClick={() => swiper.slidePrev()}>{children}</button>;
};

export default SwiperButtonPrev;
