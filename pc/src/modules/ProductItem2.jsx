import ItemFlag1 from '@/components/common/ItemFlag1';
import Image from 'next/image';
import {useRef} from 'react';

function ProductItem2(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`ProductItem2 ${className}`}>
        <div className={`relative w-full`}>
          <div className={``}>
            <Image
              className={`h-full w-full object-cover`}
              src={`https://picsum.photos/278/410.jpg?random=${idx}`}
              width={278}
              height={410}
              priority
              alt='썸네일'
            />
          </div>
          <button
            className={`RR absolute top-[8px] left-[8px] z-10 flex h-[26px] w-[26px] flex-row items-start justify-start`}
            onClick={(evt) => {
              evt.preventDefault();
              const target = evt.target.closest('div');
              console.log(target);
            }}>
            <Image className={`block`} src={`/icons/icon_15_on.svg`} width={30} height={30} priority alt='하트' />
          </button>
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag1 theme={idx}>Big</ItemFlag1>
          </div>
        </div>
        <div className={`mt-[20px]`}>
          <div className={`grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
            <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>BRAND NAME ({idx + 1})</div>
            <div>
              <div className={`flex flex-row items-center justify-center`}>
                <div className={`text-[12px] font-[400] text-[var(--color1)]`}>리뷰</div>
                <div className={`Montserrat ml-[2px] text-[12px] font-[500] text-[var(--color5)]`}>432</div>
              </div>
            </div>
          </div>
          <div className={`mt-[6px]`}>
            <div className={`text-[14px] font-[400] leading-[120%] text-[var(--color1)] line-clamp-2`}>
              [1+1] 이지케어 솔리드 드레스셔츠 레귤러 이지케어 솔리드 드레스셔츠 레귤러 이지케어 솔리드 드레스셔츠
              레귤러 이지케어 솔리드 드레스셔츠 레귤러
            </div>
          </div>
          <div className={`mt-[24px] text-[0px]`}>
            <div className={`PriceBox`}>
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
            <div className={`text-[12px] font-[400] text-[var(--color1)]`}>
              <span className={`text-[var(--color2)]`}>&#91;12/20까지 기간한정특가&#93;</span>
              &nbsp;
              <span>2장 구매시 추가할인</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem2;
