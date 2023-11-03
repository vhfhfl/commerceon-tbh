import LayoutBasic from '@/layouts/LayoutBasic';
import Desc1 from '@/modules/Desc1';
import GradeBox3 from '@/modules/GradeBox3';
import MyPageAside from '@/modules/MyPageAside';
import OrderTable2 from '@/modules/OrderTable2';
import ProductItem6 from '@/modules/ProductItem6';
import ProductTable2 from '@/modules/ProductTable2';
import { Fragment } from 'react';

function PageMyPage2() {
  return (
    <div className={`PageMyPage2`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section data-seq={`20230620171252095`}>
              <GradeBox3 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[36px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>진행중인 주문</div>
                <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
              </div>
              <OrderTable2 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[92px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>최근 주문 정보</div>
                <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
              </div>
              <div>
                <ProductTable2 />
              </div>
              <div className={`mt-[20px]`}>
                <Desc1 />
              </div>
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[147px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>최근 본 상품</div>
                <div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>
              </div>
              <div className={`border-t-[3px] border-solid border-t-[var(--color1)] pt-[32px]`}>
                <article className={`grid grid-cols-4 items-center justify-center gap-[10px]`}>
                  {Array.from(Array(4)).map((obj4, idx4) => {
                    return (
                      <Fragment key={idx4}>
                        <ProductItem6 idx={idx4} />
                      </Fragment>
                    );
                  })}
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage2.Layout = LayoutBasic;
export default PageMyPage2;
