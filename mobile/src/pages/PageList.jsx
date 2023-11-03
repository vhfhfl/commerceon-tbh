import LayoutSub3 from '@/layouts/LayoutSub3';
import FilterTagList from '@/modules/FilterTagList';
import ProductItem2 from '@/modules/ProductItem2';
import ProductItem3 from '@/modules/ProductItem3';
import {Layer} from '@/scripts/util';
import Image from 'next/image';
import {Fragment, useEffect} from 'react';

function PageList() {

  return (
    <div className={`PageList`}>
      <section data-seq={`20230613104754441`}>
        <div className={`relative overflow-auto`}>
          <div className={`relative z-10 inline-flex flex-row items-center gap-[15px] whitespace-nowrap px-[20px]`}>
            {[
              '다운/패딩 (1)',
              '코트 (18)',
              '자켓 (54)',
              '다운/패딩 (1)',
              '코트 (18)',
              '자켓 (54)',
              '다운/패딩 (1)',
              '코트 (18)',
              '자켓 (54)',
            ].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <a
                    href={`https://www.google.com`}
                    target={`_blank`}
                    className={`${
                      idx == 0 && `On`
                    } relative flex h-[42px] flex-row items-center justify-center gap-[0]`}>
                    <div
                      className={`text-[10px] font-[400] text-[var(--color5)] [.On_>_&]:font-[600] [.On_>_&]:text-[var(--color1)]`}>
                      {obj}
                    </div>
                    <div
                      className={`absolute bottom-[0px] left-[0] z-10 hidden h-[2px] w-full bg-[var(--color1)] text-[0px] [.On_>_&]:block`}>
                      Bar
                    </div>
                  </a>
                </Fragment>
              );
            })}
          </div>
          <div className={`absolute bottom-[0px] left-[0] z-0 h-[1px] w-full bg-[var(--color6)] text-[0px]`}>
            BottomLine
          </div>
        </div>
      </section>
      <section data-seq={`20230613192531467`}>
        <div className={`py-[18px] text-center text-[16px] font-[700] text-[var(--color1)]`}>
          <span className={`text-[var(--color2)]`}>"정해인"</span>
          &nbsp;
          <span>검색 결과</span>
        </div>
      </section>
      <section data-seq={`20230613104749569`}>
        <a href={`https://www.google.com`} target={`_blank`}>
          <Image
            className={`w-full`}
            src={`https://picsum.photos/360/170.jpg?random=`}
            width={360}
            height={170}
            alt=''
          />
        </a>
      </section>
      <section data-seq={`20230613111137821`}>
        <FilterTagList />
        <div
          data-seq={`20230522144804741`}
          className={`grid grid-cols-[auto_auto] items-center justify-between gap-[0] py-[11px] pl-[10px] pr-[20px]`}>
          <div>
            {/*LEFT*/}
            <div className={`flex flex-row items-center gap-[10px]`}>
              <button
                className={`FilterBtn1`}
                >
                필터 <Image className={`Icon`} src={`/icons/zco_9.svg`} width={11} height={13} alt='' />
              </button>
              <button className={`FilterBtn1`}>판매인기순</button>
            </div>
          </div>
          <div>
            {/*RIGHT*/}
            <div className={`text-[12px] font-[400] text-[var(--color5)]`}>166 개의 상품</div>
          </div>
        </div>
      </section>
      <section data-seq={`20230613111738358`}>
        <ProductItem2 />
        <div className={`mt-[24px] grid grid-cols-2 items-center justify-center gap-x-[4px] gap-y-[24px]`}>
          {Array.from(Array(4)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <ProductItem3 idx={idx} />
              </Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}

PageList.Layout = LayoutSub3;
export default PageList;
