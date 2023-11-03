import LayoutBasic from '@/layouts/LayoutBasic';
import Cupon1 from '@/modules/Cupon1';
import Cupon2 from '@/modules/Cupon2';
import {Fragment} from 'react';

function PageCuopn1() {
  return (
    <div className={`PageCuopn1`}>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <section data-seq={`20230712140819294`} className={`mt-[104px]`}>
            <div className={`Montserrat text-center text-[36px] font-[700] text-[#161616]`}>COUPON ZONE</div>
            <div className={`TabUi3 mt-[52px]`}>
              {['쿠폰받기 (00)', '보유쿠폰 (00)'].map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <button className={`${idx == 1 && `On`}`}>{obj}</button>
                  </Fragment>
                );
              })}
            </div>
          </section>
          <section data-seq={`20230712141535871`} className={`mt-[60px]`}>
            <img className={`w-full`} src={`https://gifpng.com/1800x400/`} alt={``} />
          </section>
          <section data-seq={`20230712141640248`} className={`mt-[140px]`}>
            <article className={`CenterRight`}>
              <button className={`ButtonLg ButtonStyle2`}>
                <img src={`/icons/zco_86.svg`} alt={``} />
                모든 쿠폰 한번에 받기
              </button>
            </article>
            <article className={`mt-[40px] grid grid-cols-4 items-center justify-center gap-[100px_48px]`}>
              {Array.from(Array(4)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <Cupon1 />
                    <Cupon2 />
                  </Fragment>
                );
              })}
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

PageCuopn1.Layout = LayoutBasic;
export default PageCuopn1;
