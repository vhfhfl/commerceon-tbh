import ProductSwiper5 from '@/swipers/ProductSwiper5';
import Image from 'next/image';
import {useRef} from 'react';

function ProductList3(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} {...props} className={`ProductList3 ${className}`}>
        <div className={`grid grid-cols-[32.22%_1fr] gap-[1.11%]`}>
          <div className={`relative`}>
            {/*LEFT*/}
            <div className={`h-full`}>
              <Image
                className={`aspect-[750/750] h-full w-full object-cover`}
                src={`https://picsum.photos/750/750.jpg?random=1`}
                width={750}
                height={750}
                alt=''
              />
            </div>
            <div className={`absolute top-[0] left-[0] z-10 flex h-full w-full flex-row items-end justify-center`}>
              <div className={`pb-[68px] text-center`}>
                <div className={`text-[28px] font-[700] text-[white]`}>ESSENTIAL</div>
                <button className={`Btn3 mx-auto mt-[30px] block min-w-[210px]`}>상품 전체 보기</button>
              </div>
            </div>
          </div>
          <div className={`min-w-[0]`}>
            {/*RIGHT*/}
            <ProductSwiper5 />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList3;
