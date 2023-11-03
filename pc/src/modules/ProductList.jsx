import ProductItem2 from '@/modules/ProductItem2';
import {Fragment} from 'react';

function ProductList(props) {
  const { className = '', datalist } = props;

  return (
    <>
      <div {...props} className={`ProductList ${className}`}>
        <div className={`grid grid-cols-5 items-start justify-center gap-x-[1.36%] gap-y-[5.17%]`}>
          {datalist.map((obj, idx) => {
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

export default ProductList;
