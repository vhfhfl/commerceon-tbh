import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable22 from '@/modules/FormTable22';
import GradeBox4 from '@/modules/GradeBox4';
import MyPageAside from '@/modules/MyPageAside';

function PageMyPage28() {
  return (
    <div className={`PageMyPage28`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section data-seq={`20230710133111459`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>회원탈퇴</div>
              </div>
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox4 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[36px]`}>
              <div className={`Title-2 mb-[8px]`}>
                <div className={`Txt1`}>회원탈퇴신청</div>
                {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
              </div>
              <div>
                <FormTable22 />
              </div>
              <article className={`CenterCenter mt-[90px] !gap-[16px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[230px]`}>취소</button>
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>탈퇴</button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage28.Layout = LayoutBasic;
export default PageMyPage28;
