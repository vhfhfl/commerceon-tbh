/* https://swiperjs.com/demos */
import H1 from '@/components/common/H1';
import LayoutBasic from '@/layouts/LayoutBasic';
import {SWIPER_DATA} from '@/swiper_data';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {Fragment} from 'react';
import {Controller, Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';

function PageSwiperjs() {
  const dummy_data = Array.from(Array(5));

  return (
    <div className={`PageSwiperjs`}>
      <section data-seq='20230212100913398'>
        <H1>Default</H1>
        <Swiper
          className='mySwiper'
          modules={[Navigation, Pagination, Controller]}
          navigation={true}
          pagination={true}
          loop={true}>
          {dummy_data.map((obj, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Image src={`https://gifpng.com/360x200/`} width={360} height={200} alt='' />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <br />
      <br />
      <br />

      {SWIPER_DATA.map((obj, idx) => {
        const Compo = dynamic(() => import(`@/swipers/${obj}.jsx`), {
          ssr: false,
        });

        return (
          <Fragment key={idx}>
            <section data-seq='20230414093615044'>
              <H1>{obj}</H1>
              <Compo />
            </section>
            <br />
            <br />
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}

PageSwiperjs.Layout = LayoutBasic;
export default PageSwiperjs;
