import LayoutSub7 from '@/layouts/LayoutSub6';
import BestReview from '@/swipers/BestReview';
import { Fragment } from 'react';

function PageBestReview2() {
  return (
    <div className={`PageBestReview2`}>
      <section data-seq={`20230808184227`} className={`relitive`}>
        <div className={`absolute top-0 left-0 z-10 flex h-[60px] w-full flex-row items-center gap-0 pl-[18px]`}>
          <div>
            <a
              className={`inline-flex flex-row items-center justify-center gap-0 rounded-[5px] bg-[rgba(255,255,255,.7)] pl-[2px] pr-[8px] text-[0]`}
              href={`https://www.google.com`}
              target={`_blank`}>
              <span>
                <img className={`Icon`} src={`icons/icon_75.svg`} alt={``} />
              </span>
              <span className={`text-[10px] font-[600] text-[var(--color1)]`}>본문보기</span>
            </a>
          </div>
          <div className={`absolute top-[5px] right-[6px] z-10`}>
            <a href={`https://www.google.com`} target={`_blank`}>
              <img className={`Icon`} src={`/icons/icon_76.svg`} alt={``} />
            </a>
          </div>
        </div>
        <div>
          <BestReview />
        </div>
      </section>
      <section data-seq={`20230808184230`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`py-[18px]`}>
              <a className={`block`} href={`https://www.google.com`} target={`_blank`}>
                <article className={`grid grid-cols-[70px_1fr] items-start gap-0`}>
                  <div>
                    <img src={`https://picsum.photos/70/70.jpg?random=1`} alt={``} />
                  </div>
                  <div className={`ml-[12px]`}>
                    <div className={`text-[12px] font-[600] text-[var(--color1)]`}>와이드쿨맥스 밴딩슬랙스</div>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230808234031`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`border-t-[1px] border-solid border-t-[var(--color6)]`}>
              <div className={`py-[23px]`}>
                <div className={`text-[16px] font-[600] text-[var(--color1)]`}>이 상품의 다른 리뷰</div>
                <div className={`mt-[10px]`}>
                  <article className={`grid grid-cols-3 items-center justify-center gap-[10px]`}>
                    {Array.from(Array(3)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <a href={`https://www.google.com`} target={`_blank`}>
                            <img src={`https://picsum.photos/100/100.jpg?random=${idx}`} alt={``} />
                          </a>
                        </Fragment>
                      );
                    })}
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageBestReview2.Layout = LayoutSub7;
export default PageBestReview2;
