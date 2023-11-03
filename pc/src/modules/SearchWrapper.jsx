import FilterTagList from '@/modules/FilterTagList';
import ProductList4 from '@/modules/ProductList4';
import Banner3 from '@/swipers/Banner3';
import {useRef} from 'react';

function SearchWrapper(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`SearchWrapper ${className}`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`grid grid-cols-[280px_1fr] gap-[35px]`}>
              <div className={`border-r-[1px] border-solid border-r-[var(--color6)] pr-[35px]`}>
                {/*LEFT*/}
                {/*<FilterOption />*/}
                <div>필터는 리스트 페이지에 있습니다.</div>
              </div>
              <div className={`min-w-[0]`}>
                {/*RIGHT*/}
                <FilterTagList />
                <div className={`mt-[26px]`}>
                  <ProductList4 />
                </div>
                <div className={`mt-[160px]`}>
                  <Banner3 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchWrapper;
