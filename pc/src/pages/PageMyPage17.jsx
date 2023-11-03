import LayoutBasic from '@/layouts/LayoutBasic';
import BoardTable_1 from '@/modules/BoardTable_1';
import DateFilter2 from '@/modules/DateFilter2';
import MyPageAside2 from '@/modules/MyPageAside2';
import Paging1 from '@/modules/Paging1';

function PageMyPage17() {
  return (
    <div className={`PageMyPage17`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside2 />
          </div>
          <div>
            <section data-seq={`20230710133111456`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>1:1문의 게시판</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div>
                <DateFilter2 />
              </div>
              <div className={`mt-[30px]`}>
                <BoardTable_1 />
              </div>
              <article className={`mt-[40px] flex flex-row items-center gap-[16px]`}>
                <button className={`ButtonLg ButtonStyle4 w-[130px]`}>FAQ</button>
                <button className={`ButtonLg ButtonStyle4 w-[130px]`}>1:1 문의하기</button>
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

PageMyPage17.Layout = LayoutBasic;
export default PageMyPage17;
