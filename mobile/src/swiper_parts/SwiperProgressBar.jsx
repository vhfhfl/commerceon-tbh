import {useEffect, useRef} from 'react';
import {useSwiper} from 'swiper/react';

const SwiperProgressBar = ({ children }) => {
  const swiper = useSwiper();

  const ref_bar = useRef();

  function calPer() {
    const pageItemCnt = swiper.loopedSlides;
    const ri = swiper.realIndex;

    const slideTotalCnt = swiper.slides.length;
    const pageTotalCnt = Math.ceil(slideTotalCnt / pageItemCnt);

    const pageNum = Math.floor(ri / pageItemCnt) + 1;

    const per = parseInt((pageNum / pageTotalCnt) * 100);

    const el_bar = ref_bar.current;
    el_bar.style.setProperty('width', `${per}%`);
  }

  useEffect(() => {
    // mount

    const handlerResize = (evt) => {
      calPer();
    };
    window.addEventListener('resize', handlerResize);
    calPer();

    swiper.on('slideChange', function () {
      calPer();
    });

    return () => {
      window.removeEventListener('resize', handlerResize);
      swiper.off('slideChange');
    };
  }, []);

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .SwiperProgressBar{--height:20px;}
        .SwiperProgressBar{outline:1px dashed red;}
        .SwiperProgressBar{position:relative;height:var(--height);background-color:black;}
        .SwiperProgressBar > .Bar{z-index:0;position:absolute;top:0px;left:0px;}
        .SwiperProgressBar > .Bar{height:100%;width:50%;background-color:white;}
        .SwiperProgressBar > .Bar{transition:all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);}
        .SwiperProgressBar > .Text{position:relative;z-index:5;text-align:center;height:100%;font-size:14px;color:red;}
        .SwiperProgressBar > .Text{display:flex;align-items:center;justify-content:center;}
      `}</style>
      <div className={`SwiperProgressBar`}>
        <div ref={ref_bar} className={`Bar`}></div>
        <div className={`Text`}>{children}</div>
      </div>
    </>
  );
};

export default SwiperProgressBar;
