import {useEffect, useState} from 'react';
import {useSwiper} from 'swiper/react';

const SwiperNumberTotal = (props) => {
  const { className = '' } = props;

  const swiper = useSwiper();
  const [total_count, setTotalCount] = useState();

  useEffect(() => {
    // mount

    const handlerResize = (evt) => {
      syncCount();
    };
    window.addEventListener('resize', handlerResize);
    syncCount();

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  function syncCount() {
    const pageItemCnt = swiper.loopedSlides;
    const slideTotalCnt = swiper.slides.length;
    const pageTotalCnt = Math.ceil(slideTotalCnt / pageItemCnt);
    setTotalCount(pageTotalCnt.toString().padStart(2, '0'));
  }

  return (
    <>
      <div className={`inline-block ${className}`} style={{ fontFamily: 'inherit' }}>
        {total_count}
      </div>
    </>
  );
};

export default SwiperNumberTotal;
