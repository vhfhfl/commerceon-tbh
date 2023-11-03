import LayoutBasic from '@/layouts/LayoutBasic';
import BoardTable_3 from '@/modules/BoardTable_3';
import MyPageAside from '@/modules/MyPageAside';

function PageMyPage29() {
  return (
    <div className={`PageMyPage29`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section data-seq={`20230710133111456`}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>배송지관리</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[90px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>배송지 목록</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <button className={`ButtonMd ButtonStyle2 ml-[25px] w-[105px]`}>배송지 목록</button>
                </article>
              </article>

              <div>
                <BoardTable_3 />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage29.Layout = LayoutBasic;
export default PageMyPage29;
