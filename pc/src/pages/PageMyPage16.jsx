import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable12 from '@/modules/FormTable12';
import MyPageAside from '@/modules/MyPageAside';

function PageMyPage16() {
  return (
    <div className={`PageMyPage16`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section data-seq={`20230710130935792`} className={``}>
              <div className={`text-center text-[36px] font-[600] text-[#161616]`}>인증메일받기 임직원 인증</div>
              <div className={`mt-[145px]`}>
                <FormTable12 />
              </div>
              <article className={`mt-[45px] flex flex-row items-center justify-center gap-[0]`}>
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>인증메일 받기</button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage16.Layout = LayoutBasic;
export default PageMyPage16;
