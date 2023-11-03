import LayoutSub from '@/layouts/LayoutSub';
import DeliveryList from '@/modules/DeliveryList';

function PageMyPage29() {
  return (
    <div className={`PageMyPage29`}>
      <section data-seq={`20230816154059`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>배송지 목록</div>
            </div>
            <div>
              <DeliveryList />
            </div>
            <div className={`mt-[40px]`}>
              <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
                <button className={`ButtonStyle2 ButtonXl`}>배송지 추가 등록</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage29.Layout = LayoutSub;
export default PageMyPage29;
