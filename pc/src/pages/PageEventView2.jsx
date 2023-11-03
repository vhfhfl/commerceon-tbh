import LayoutBasic from '@/layouts/LayoutBasic';
import DetailTitle2 from '@/modules/DetailTitle2';
import { Fragment } from 'react';
import ProductItem8 from '@/modules/ProductItem8';

function PageEventView2() {
  return (
    <div className={`PageEventView2`}>
      <div className={`SubContainer mt-[110px]`}>
        <section data-seq={`20230702213353135`}>
          <div>
            <DetailTitle2 />
          </div>
          <div className={`mt-[40px]`}>
            <img src={`https://gifpng.com/1400x884/`} alt={``} />
          </div>
        </section>
        <section data-seq={`20230703093408913`} className={`mt-[180px]`}>
          <article className={`StickyBox`} data-sticky-offset={`90`}>
            <div className={`Shell SyncHeight w-[1400px]`}>
              <article className={`TabUi-2`}>
                <button className={`On`}>남성</button>
                <button>여성</button>
              </article>
              <article
                className={`flex flex-row items-center justify-center gap-[60px] bg-white py-[25px] text-[18px] font-[600] text-[#d4d4d4]`}>
                {Array.from(Array(10)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button
                        className={`${
                          idx == 0 && `On`
                        } border-b-[3px] border-solid border-b-transparent pb-[10px] [&.On]:border-b-[#161616] [&.On]:text-[#161616]`}>
                        <div>카테고리 {idx + 1}</div>
                      </button>
                    </Fragment>
                  );
                })}
              </article>
            </div>
          </article>
          <div>
            {Array.from(Array(3)).map((obj2, idx2) => {
              return (
                <Fragment key={idx2}>
                  <div className={`mb-[120px]`}>
                    <div className={`my-[50px] text-center text-[24px] font-[600] text-[var(--color1)]`}>
                      카테고리 {idx2 + 1}
                    </div>
                    <article
                      className={`grid grid-cols-5 items-center justify-center gap-x-[12px] gap-y-[70px]`}>
                      {Array.from(Array(10)).map((obj, idx) => {
                        return (
                          <Fragment key={idx}>
                            <ProductItem8 idx={idx} />
                          </Fragment>
                        );
                      })}
                    </article>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <article className={`mt-[113px] flex flex-row items-center justify-center gap-[0]`}>
            <button className={`ButtonXl ButtonStyle4 w-[257px]`}>
              기획전 더보기
              <img className={`Icon`} src={`/icons/zco_74.svg`} alt={``} />
            </button>
          </article>
        </section>
      </div>
    </div>
  );
}

PageEventView2.Layout = LayoutBasic;
export default PageEventView2;
