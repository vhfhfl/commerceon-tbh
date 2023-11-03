import ProductItem from '@/modules/ProductItem';
import Image from 'next/image';
import {forwardRef, Fragment, useRef} from 'react';

const ProductList2 = forwardRef(function ProductList2(props, forwardedRef) {
  const { children, className = '', theme = '1' } = props;

  const ref_this = useRef();

  return (
    <>
      <div
        className={`ProductList2 ${className} ${theme && `Theme${theme}`}`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        <div
          className={`grid grid-cols-2 items-start justify-center gap-x-[4px] gap-y-[36px] md:grid-cols-4 lg:grid-cols-5 `}>
          {Array.from(Array(4)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <ProductItem idx={idx} />
              </Fragment>
            );
          })}
        </div>
        <div className={`mt-[40px] text-center`}>
          <button
            className={`MoreBtn inline-flex flex-row items-center justify-center`}
            onClick={(evt) => {
              const target = evt.target.closest('.MoreBtn');
              target.classList.toggle('On');
            }}>
            <div className={`Montserrat text-[14px] font-[600] text-[var(--color1)]`}>MORE</div>
            <Image
              className={`Icon ml-[6px] [.MoreBtn.On_&]:rotate-180`}
              src={`/icons/icon_12.svg`}
              width={18}
              height={18}
              alt=''
            />
          </button>
        </div>
      </div>
    </>
  );
});

export default ProductList2;
