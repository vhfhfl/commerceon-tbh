import LayoutBasic from '@/layouts/LayoutBasic';
import BoardTable_2 from '@/modules/BoardTable_2';
import MyPageAside from '@/modules/MyPageAside';
import Paging1 from "@/modules/Paging1";

function PageMyPage21() {
  return (
    <div className={`PageMyPage21`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside />
          </div>
          <div>
            <section data-seq={`20230710133111456`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>상품문의</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div>
                <BoardTable_2 />
              </div>
              <article className={`mt-[40px] flex flex-row items-center gap-[16px]`}>
                <button className={`ButtonLg ButtonStyle4 w-[137px]`}>상품 문의하기</button>
              </article>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage21.Layout = LayoutBasic;
export default PageMyPage21;
