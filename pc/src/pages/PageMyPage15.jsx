import LayoutBasic from '@/layouts/LayoutBasic';
import DateFilter2 from '@/modules/DateFilter2';
import GradeBox3 from '@/modules/GradeBox3';
import MyPageAside from '@/modules/MyPageAside';
import Paging1 from '@/modules/Paging1';
import ProductTable14 from '@/modules/ProductTable14';

function PageMyPage15() {
  return (
    <div className={`PageMyPage15`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section data-seq={`20230620171252095`}>
              <GradeBox3 />
            </section>
            <section data-seq={`20230621124610190`} className={`mt-[40px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>마일리지</div>
                {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
              </div>
              <div>
                <DateFilter2 />
              </div>
            </section>
            <section data-seq={`20230710122907577`} className={`mt-[58px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>2023-05-04~2023-05019까지의 마일리지 내역 총 00건</div>
                    {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
                  </div>
                </div>
                <div>
                  <div className={`text-[16px] font-[400] text-[var(--color2)]`}>사용가능 마일리지: 000원</div>
                </div>
              </article>
              <div>
                <ProductTable14 />
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

PageMyPage15.Layout = LayoutBasic;
export default PageMyPage15;
