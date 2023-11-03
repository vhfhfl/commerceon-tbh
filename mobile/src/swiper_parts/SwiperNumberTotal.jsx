import { useSwiper } from 'swiper/react';
import { useEffect, useState } from 'react';

const SwiperNumberTotal = ({ children }) => {
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

    setTotalCount(pageTotalCnt);
  }

  return (
    <>
      <div className={`inline-block`} style={{ fontFamily: 'inherit' }}>
        {total_count}
      </div>
    </>
  );
};

export default SwiperNumberTotal;
