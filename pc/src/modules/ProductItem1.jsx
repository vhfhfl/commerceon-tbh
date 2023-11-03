import ItemFlag1 from "@/components/common/ItemFlag1";
import Image from "next/image";
import {useRef} from 'react';

function ProductItem1(props) {
  const { className = '', idx } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`ProductItem1 ${className}`}>
        <div className={`relative`}>
          <Image
            className={`h-full w-full object-contain`}
            src={`https://picsum.photos/230/338.jpg?random=${idx}`}
            width={230}
            height={338}
            alt=''
          />
          <div className={`absolute top-[0] right-[0] z-10`}>
            <ItemFlag1 theme={idx}>Big</ItemFlag1>
          </div>
        </div>
        <div className={`mt-[20px]`}>
          <div className={`text-[14px] font-[600] text-[black]`}>BRAND NAME ({idx + 1})</div>
          <div
            className={`mt-[8px] text-[14px] font-[400] leading-[20px] leading-[14px] text-[var(--color1)] line-clamp-2`}>
            텍스트 설정 없을시 상품명이 텍스트 설정 없을시 상품명이 설정 없을시 상품명이 텍스트 설정 없을시 상품명이
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem1;
