import FilterTagList from '@/modules/FilterTagList';
import ProductItem from '@/modules/ProductItem';
import {Layer} from '@/scripts/util';
import Image from 'next/image';
import {Fragment} from 'react';

function ProductList4(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} className={`ProductList4 ${className}`}>
        <FilterTagList />
        <div
          data-seq={`20230522144804741`}
          className={`grid grid-cols-[auto_auto] items-center justify-between gap-0 py-[11px] pl-[10px] pr-[20px]`}>
          <div>
            {/*LEFT*/}
            <div className={`flex flex-row items-center gap-[10px]`}>
              <button
                className={`FilterBtn1`}
                >
                필터 <Image className={`Icon`} src={`/icons/zco_9.svg`} width={11} height={13} alt='' />
              </button>
              <button className={`FilterBtn1`}>판매인기순</button>
            </div>
          </div>
          <div>
            {/*RIGHT*/}
            <div className={`text-[12px] font-[400] text-[var(--color5)]`}>166 개의 상품</div>
          </div>
        </div>
        <div data-seq={`20230522144809269`}>
          <div className={`grid grid-cols-2 items-center justify-center gap-[36px_4px]`}>
            {Array.from(Array(4)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <ProductItem idx={idx} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList4;
