import LayoutBasic from '@/layouts/LayoutBasic';
import FilterTagList from '@/modules/FilterTagList';
import ListFilter from '@/modules/ListFilter';
import ProductItem4 from '@/modules/ProductItem4';
import Image from 'next/image';
import {Fragment} from 'react';

function PageList() {
  return (
    <div className={`PageList`}>
      <div className={`H-Box pt-[42px]`}>
        <div className={`Inner`}>
          <div className={`grid grid-cols-[314px_1fr] gap-[0]`}>
            <div className={`border-r-[1px] border-solid border-l-[var(--color6)] pr-[35px]`}>
              <ListFilter />
            </div>
            <div className={`pl-[35px]`}>
              <section data-seq='20230612091628977' className=''>
                <div
                  className={`flex flex-row items-center gap-[0] text-[16px] font-[400] leading-[30px] text-[var(--color1)]`}>
                  <div>HOME</div>
                  <Image src={`/icons/zco_49.svg`} width={20} height={20} alt='' />
                  <div>남성</div>
                  <Image src={`/icons/zco_49.svg`} width={20} height={20} alt='' />
                  <div>아우터</div>
                  <Image src={`/icons/zco_49.svg`} width={20} height={20} alt='' />
                  <div>코트</div>
                </div>
                <div
                  className={`flex flex-row items-center gap-[0] text-[16px] font-[400] leading-[30px] text-[var(--color1)]`}>
                  <div>HOME</div>
                  <Image src={`/icons/zco_49.svg`} width={20} height={20} alt='' />
                  <div className={`font-[600]`}>ACUASCUTUM</div>
                </div>
                <div className={`py-[16px] text-center text-[24px] font-[700] text-[var(--color1)]`}>
                  <span className={`text-[var(--color2)]`}>"정해인"</span>
                  <span className={`ml-[6px]`}>검색 결과</span>
                </div>
                <div className={`Montserrat py-[25px] text-center text-[28px] font-[700] text-[var(--color1)]`}>
                  NEW IN
                </div>
                <div className={`mt-[15px]`}>
                  <Image
                    className={`aspect-[1450/280] h-full w-full object-cover`}
                    src={`https://picsum.photos/1450/280.jpg`}
                    width={1450}
                    height={280}
                    alt=''
                  />
                </div>
                <div className={`mt-[40px] flex flex-row items-center justify-start gap-[30px]`}>
                  <div>정해인자켓</div>
                  <div className={`text-[var(--color5)]`}>고프코어시리즈</div>
                  <div className={`text-[var(--color5)]`}>세미오버</div>
                </div>
              </section>
              <section
                data-seq={`20230614065635399`}
                className={`mt-[15px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[25px]`}>
                <FilterTagList />
              </section>
              <section data-seq='20230612091633250' className=''>
                <div
                  className={`flex flex-row items-center justify-start gap-[25px] text-[16px] font-[400] text-[var(--color1)]`}>
                  <button className={`font-[700]`}>판매인기순</button>
                  <button>낮은 가격순</button>
                  <button>높은 가격순</button>
                  <button>신상품순</button>
                </div>
                <div className={`mt-[25px] grid grid-cols-4 items-center justify-center gap-x-[18px] gap-y-[40px]`}>
                  {Array.from(Array(8)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <ProductItem4 idx={idx} />
                      </Fragment>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PageList.Layout = LayoutBasic;
export default PageList;
