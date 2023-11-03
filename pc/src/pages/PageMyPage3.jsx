import LayoutBasic from '@/layouts/LayoutBasic';
import DateFilter2 from '@/modules/DateFilter2';
import Desc1 from '@/modules/Desc1';
import GradeBox3 from '@/modules/GradeBox3';
import MyPageAside from '@/modules/MyPageAside';
import OrderTable2 from '@/modules/OrderTable2';
import Paging1 from '@/modules/Paging1';
import ProductTable1 from '@/modules/ProductTable1';

function PageMyPage3() {
  return (
    <div className={`PageMyPage3`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section data-seq={`20230620171252095`} className={``}>
              <GradeBox3 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[36px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>주문목록/배송조회</div>
                {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
              </div>
              <OrderTable2 />
            </section>
            <section data-seq={`20230621124610190`} className={`mt-[40px]`}>
              <DateFilter2 />
            </section>
            <section data-seq={`20230621133015753`} className={`mt-[60px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>주문목록/배송조회 내역 총0건</div>
                {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
              </div>
              <div>
                <ProductTable1 />
              </div>
              <div className={`mt-[25px]`}>
                <Desc1 />
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage3.Layout = LayoutBasic;
export default PageMyPage3;
