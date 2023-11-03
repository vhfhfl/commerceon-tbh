import {useEffect, useState} from 'react';
import {useSwiper} from 'swiper/react';

const SwiperNumberCurrent = (props) => {
  const { className = '' } = props;

  const swiper = useSwiper();
  const [index, setIndex] = useState(swiper.realIndex + 1);

  useEffect(() => {
    // mount

    const handlerResize = (evt) => {
      syncCount();
    };
    window.addEventListener('resize', handlerResize);
    syncCount();

    swiper.on('slideChange', function () {
      syncCount();
    });

    return () => {
      window.removeEventListener('resize', handlerResize);
      swiper.off('slideChange');
    };
  }, []);

  function syncCount() {
    const pageItemCnt = swiper.loopedSlides;
    const ri = swiper.realIndex;

    const slideTotalCnt = swiper.slides.length;
    const pageTotalCnt = Math.ceil(slideTotalCnt / pageItemCnt);

    const pageNum = Math.floor(ri / pageItemCnt) + 1;

    setIndex(pageNum);
  }

  return (
    <>
      <div className={`SwiperNumberCurrent inline-block ${className}`} style={{ fontFamily: 'inherit' }}>
        {index}
      </div>
    </>
  );
};

export default SwiperNumberCurrent;
