import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';
import { Fragment, useRef } from 'react';

function ProductItem8(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`ProductItem8 ${className}`}>
        <div className={`relative w-full`}>
          <div>
            <img
              className={``}
              src={`https://picsum.photos/270/360.jpg?random=${idx}`}
              priority
              alt='썸네일'
            />
          </div>
          {idx == 0 && (
            <div className={`absolute top-0 left-0 z-10 h-full w-full bg-[rgba(136,136,136,0.7)] text-[0]`}>
              LayerDimmed
            </div>
          )}
          <button
            className={`absolute top-[8px] left-[8px] z-10 flex h-[26px] w-[26px] flex-row items-start justify-start`}
            onClick={(evt) => {
              evt.preventDefault();
              const target = evt.target.closest('div');
              console.log(target);
            }}>
            <Image className={`block`} src={`/icons/icon_15_on.svg`} width={30} height={30} priority alt='하트' />
          </button>
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag1 theme={idx}>1+1</ItemFlag1>
          </div>
          {idx == 1 && (
            <div
              className={`Montserrat absolute bottom-0 left-0 z-10 w-full bg-[rgba(255,255,255,0.7)] py-[16px] text-center text-[14px] font-[600] text-[var(--color1)]`}>
              <div>TIMESALE</div>
              <article className={`mt-[12px] flex flex-row items-start justify-center gap-[14px]`}>
                <div>
                  <div className={`text-[20px] font-[600]`}>1</div>
                  <div className={`mt-[10px] text-[12px] font-[500]`}>hours</div>
                </div>
                <div>
                  <div className={`text-[20px] font-[400]`}>:</div>
                  <div></div>
                </div>
                <div>
                  <div className={`text-[20px] font-[600]`}>23</div>
                  <div className={`mt-[10px] text-[12px] font-[500]`}>minutes</div>
                </div>
                <div>
                  <div className={`text-[20px] font-[400]`}>:</div>
                  <div></div>
                </div>
                <div>
                  <div className={`text-[20px] font-[600]`}>45</div>
                  <div className={`mt-[10px] text-[12px] font-[500]`}>seconds</div>
                </div>
              </article>
            </div>
          )}
        </div>
        <div className={`mt-[15px]`}>
          <article className={`grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
            <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>BRAND NAME ({idx + 1})</div>
            <div>
              <article className={`flex flex-row items-center justify-center`}>
                <div className={`text-[10px] font-[400] text-[var(--color1)]`}>리뷰</div>
                <div className={`Montserrat ml-[2px] text-[10px] font-[500] text-[var(--color5)]`}>432</div>
              </article>
            </div>
          </article>
          <div className={`mt-[8px]`}>
            <div className={`truncate text-[12px] font-[400] text-[var(--color1)]`}>
              [1+1] 이지케어 솔리드 드레스셔츠 레귤러 이지케어 솔리드 드레스셔츠 레귤러 이지케어 솔리드 드레스셔츠
              레귤러 이지케어 솔리드 드레스셔츠 레귤러
            </div>
          </div>
          <div className={`mt-[16px] flex flex-row flex-wrap gap-[4px]`}>
            {[
              '#6C6960',
              '#E4A010',
              '#CB3234',
              '#008F39',
              '#C93C20',
              '#A18594',
              '#9C9C9C',
              '#025669',
              '#2C5545',
              '#2F353B',
              '#6C6960',
              '#E4A010',
              '#CB3234',
              '#008F39',
              '#C93C20',
              '#A18594',
              '#9C9C9C',
              '#025669',
              '#2C5545',
              '#2F353B',
            ].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <div className={`aspect-square w-[18px] rounded-full`} style={{ backgroundColor: obj }}></div>
                </Fragment>
              );
            })}
          </div>
          <div className={`mt-[7px] text-[10px] font-[400] text-[var(--color5)]`}>SIZE : 95~115</div>
          <div className={`mt-[15px] text-[0px]`}>
            <div className={`PriceBox Type2`}>
              <div className={`text-[var(--color1)]`}>64,000</div>
              <div className={`Sale text-[var(--color1)]`}>129,000</div>
              <div className={`text-[var(--color2)]`}>50%</div>
            </div>
          </div>
          <div className={`FlagBltBox mt-[8px]`}>
            <div className={`FlagBlt Type2`}>주문폭주</div>
            <div className={`FlagBlt`}>뉴시즌</div>
          </div>
          <div className={`mt-[8px] border-t-[1px] border-t-[var(--color3)] pt-[8px]`}>
            <div className={`text-[12px] font-[400] leading-[14px] text-[var(--color1)]`}>
              <div className={`text-[var(--color2)]`}>&#91;12/20까지 기간한정특가&#93;</div>
              <div>2장 구매시 추가할인</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem8;
