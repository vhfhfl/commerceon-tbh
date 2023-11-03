import SearchBox1 from '@/components/common/SearchBox1';
import LayoutSub2 from '@/layouts/LayoutSub2';
import Image from 'next/image';
import {Fragment} from 'react';

function PageSearch() {
  return (
    <div className={`PageSearch`}>
      <div className={`mt-[10px] px-[15px]`}>
        <SearchBox1 />
      </div>

      <div className={`mt-[10px]`}>
        <div className={`overflow-auto text-center`}>
          <div className={`inline-flex flex-row gap-[10px] px-[20px] text-left`}>
            <div
              className={`w-[260px] rounded-[12px] border-[1px] border-solid border-[var(--color7)] px-[20px] py-[25px]`}>
              <div
                className={`border-b-[2px] border-solid border-b-[black] pb-[15px] text-[16px] font-[500] text-[var(--color1)]`}>
                <div className={`flex flex-row items-center justify-between`}>
                  <div>최근 검색어</div>
                  <button className={`RR text-[14px] font-[400] text-[var(--color5)]`}>전체 삭제</button>
                </div>
              </div>
              <ul className={`mt-[18px] space-y-[14px]`}>
                {Array.from(Array(5)).map((obj1, idx1) => {
                  return (
                    <Fragment key={idx1}>
                      <li
                        className={`grid grid-cols-[1fr_17px] items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color1)]`}>
                        <div>반팔셔츠</div>
                        <div>
                          <Image className={`RR`} src={`/icons/zco_26.svg`} width={17} height={16} alt='' />
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
              <div className={`flex flex-row items-center justify-center text-[14px] font-[400] text-[var(--color5)] h-[150px]`}>
                최근 검색어가 없습니다.
              </div>
            </div>
            <div
              className={`w-[260px] rounded-[12px] border-[1px] border-solid border-[var(--color7)] px-[20px] py-[25px]`}>
              <div
                className={`border-b-[2px] border-solid border-b-[black] pb-[15px] text-[16px] font-[500] text-[var(--color1)]`}>
                추천 검색어
              </div>
              <ul className={`mt-[18px] space-y-[14px]`}>
                {Array.from(Array(10)).map((obj1, idx1) => {
                  return (
                    <Fragment key={idx1}>
                      <li
                        className={`grid grid-cols-[28px_1fr_14px] items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color1)]`}>
                        <div>{idx1 + 1}</div>
                        <div>윈드브레이커</div>
                        <div>
                          {(() => {
                            switch (idx1) {
                              case 0:
                                return <Image src={`/icons/zco_25_1.svg`} width={14} height={16} alt='' />;
                              case 1:
                                return <Image src={`/icons/zco_25_2.svg`} width={14} height={16} alt='' />;
                              default:
                                return <Image src={`/icons/zco_25_3.svg`} width={14} height={16} alt='' />;
                            }
                          })()}
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
            <div
              className={`w-[260px] rounded-[12px] border-[1px] border-solid border-[var(--color7)] px-[20px] py-[25px]`}>
              <div
                className={`border-b-[2px] border-solid border-b-[black] pb-[15px] text-[16px] font-[500] text-[var(--color1)]`}>
                <div className={`flex flex-row items-center justify-between`}>
                  <div>인기 검색어</div>
                  <div className={`text-[14px] font-[400] text-[var(--color5)]`}>12:00 업데이트</div>
                </div>
              </div>
              <ul className={`mt-[18px] space-y-[14px]`}>
                {Array.from(Array(10)).map((obj1, idx1) => {
                  return (
                    <Fragment key={idx1}>
                      <li
                        className={`grid grid-cols-[28px_1fr_14px] items-center justify-center gap-[0] text-[14px] font-[400] text-[var(--color1)]`}>
                        <div className={`${idx1 < 3 && `text-[var(--color2)]`}`}>{idx1 + 1}</div>
                        <div>윈드브레이커</div>
                        <div>
                          {(() => {
                            switch (idx1) {
                              case 0:
                                return <Image src={`/icons/zco_25_1.svg`} width={14} height={16} alt='' />;
                              case 1:
                                return <Image src={`/icons/zco_25_2.svg`} width={14} height={16} alt='' />;
                              default:
                                return <Image src={`/icons/zco_25_3.svg`} width={14} height={16} alt='' />;
                            }
                          })()}
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PageSearch.Layout = LayoutSub2;
export default PageSearch;
