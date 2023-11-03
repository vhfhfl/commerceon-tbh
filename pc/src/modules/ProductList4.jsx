import ProductItem2 from '@/modules/ProductItem2';
import {Fragment, useRef} from 'react';

function ProductList4(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`ProductList4 ${className}`}>
        <div className={`flex flex-row items-center space-x-[25px]`}>
          {['판매인기순', '낮은 가격순', '높은 가격순', '신상품순'].map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <label
                  className={`relative block flex h-[30px] flex-row items-center justify-center text-[16px] font-[400] text-[var(--color1)]`}>
                  <input
                    className={`absolute top-[0] left-[0] z-10 h-full w-full cursor-pointer appearance-none`}
                    type='radio'
                    name={`9cb0737f`}
                    defaultChecked={idx == 0}
                  />
                  <div className={`[input:checked_~_&]:font-[700]`}>{obj}</div>
                </label>
              </Fragment>
            );
          })}
        </div>
        <div className={`mt-[26px] grid grid-cols-5 items-center justify-center gap-[40px_15px]`}>
          {Array.from(Array(30)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <ProductItem2 idx={idx} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList4;
