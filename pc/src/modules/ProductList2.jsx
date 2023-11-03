import ProductItem7 from '@/modules/ProductItem7';
import { Fragment } from 'react';

function ProductList2(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} className={`ProductList2 ${className}`}>
        <div className={`grid grid-cols-5 items-start justify-center gap-x-[1.36%] gap-y-[5.17%]`}>
          {Array.from(Array(12)).map((obj, idx) => {
            return (
              <Fragment key={idx}>
                <ProductItem7 idx={idx} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList2;
