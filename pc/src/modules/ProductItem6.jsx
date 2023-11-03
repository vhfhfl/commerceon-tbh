import ItemFlag1 from "@/components/common/ItemFlag1";
import Image from 'next/image';
import {Fragment, useRef} from 'react';

function ProductItem6(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`ProductItem6 ${className}`}>
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
        <div className={`mt-[15px]`}>
          <div className={`grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
            <div className={`Montserrat text-[12px] font-[600] text-[var(--color1)]`}>BRAND NAME ({idx + 1})</div>
          </div>
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
          <div className={`mt-[15px] text-[0px] text-left`}>
            <div className={`PriceBox Type2`}>
              <div className={`text-[var(--color1)]`}>64,000</div>
              <div className={`Sale text-[var(--color1)]`}>129,000</div>
              <div className={`text-[var(--color2)]`}>50%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem6;
