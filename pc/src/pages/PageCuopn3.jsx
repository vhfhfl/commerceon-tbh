import LayoutBasic from '@/layouts/LayoutBasic';
import {Fragment} from 'react';

function PageCuopn3() {
  return (
    <div className={`PageCuopn3`}>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <section data-seq={`20230712141535871`} className={`mt-[75px]`}>
            <img className={`w-full`} src={`https://gifpng.com/1800x400/`} alt={``} />
          </section>
        </div>
      </div>
      <div className={`SubContainer`}>
        <section data-seq={`20230712160655086`} className={`mt-[59px]`}>
          <article className={`CenterBetween`}>
            <div>
              <div className={`Title-1`}>
                <div className={`Txt1`}>라이브 미리보기</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
            </div>
            <div>
              <button className={`CenterCenter`}>
                <div className={`text-[16px] font-[500] text-[#161616]`}>모두보기</div>
                <img className={`ml-[8px]`} src={`/icons/zco_88.svg`} alt={``} />
              </button>
            </div>
          </article>
          <ul className={`mt-[75px] grid grid-cols-2 items-center justify-center gap-[202px]`}>
            {Array.from(Array(2)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li className={`flex flex-row items-center justify-center gap-[13px]`}>
                    <div className={`grow`}>
                      <img src={`https://gifpng.com/440x170/`} alt={``} />
                    </div>
                    <div className={`w-[146px]`}>
                      <div className={`text-[14px] font-[500] text-[#161616]`}>내일밤 8시 40분</div>
                      <div className={`mt-[9px] text-[16px] font-[700] leading-[20px] text-[#161616]`}>
                        쥬시쥬디 썸머 클리언스 LIVE
                      </div>
                      <article className={`CenterLeft mt-[32px]`}>
                        <img className={`rounded-full`} src={`https://gifpng.com/31x31/`} alt={``} />
                        <div className={`ml-[8px] text-[14px] font-[700] text-[#161616]`}>TBH SHOP</div>
                      </article>
                    </div>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </section>
        <div className={`mt-[70px] h-[1px] bg-[#ececec]`}></div>
        <section data-seq={`20230712160655086`} className={`mt-[70px]`}>
          <article className={`CenterBetween`}>
            <div>
              <div className={`Title-1`}>
                <div className={`Txt1`}>쥬시쥬디</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
            </div>
            <div>
              <button className={`CenterCenter`}>
                <div className={`text-[16px] font-[500] text-[#161616]`}>모두보기</div>
                <img className={`ml-[8px]`} src={`/icons/zco_88.svg`} alt={``} />
              </button>
            </div>
          </article>
          <ul className={`grid grid-cols-4 items-center justify-center gap-[40px]`}>
            {Array.from(Array(7)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <li>
                    <div>
                      <img className={`w-full`} src={`https://gifpng.com/320x448/`} alt={``} />
                    </div>
                    <div className={`mt-[15px]`}>
                      <div className={`text-[16px] font-[400] leading-[20px] text-[#161616]`}>
                        쥬시쥬디 썸머 클리언스 LIVE
                      </div>
                      <div className={`mt-[22px] text-[16px] font-[700] text-[#161616]`}>TBH SHOP</div>
                    </div>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

PageCuopn3.Layout = LayoutBasic;
export default PageCuopn3;
