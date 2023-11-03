import Image from 'next/image';
import {useRef} from 'react';

function ProductItem5(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`ProductItem5 ${className}`}>
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
        </div>
        <div className={`mt-[26px]`}>
          <div className={`grid grid-cols-[repeat(2,auto)] items-center justify-between`}>
            <div
              className={`Montserrat flex h-[32px] flex-row items-center justify-center gap-[0] border-[1px] border-solid border-[var(--color6)] text-[12px] font-[600] text-[var(--color1)] px-[14px]`}>
              BRAND NAME ({idx + 1})
            </div>
          </div>
          <div className={`mt-[20px]`}>
            <div className={`text-[18px] font-[600] text-[var(--color1)]`}>
              마인드 브릿지 BRAND WEEK
            </div>
            <div className={`mt-[8px] text-[14px] leading-[20px] font-[400] text-[var(--color1)]`}>
              단 7일간, UP TO 83% OFF 3만원 쿠폰팩 증정
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem5;
