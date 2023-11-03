import LayoutSub from '@/layouts/LayoutSub';
import { Util } from '@/scripts/util';

function PageMyPage18() {
  return (
    <div className={`PageMyPage18`}>
      <section data-seq={`20230811174001`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`text-center text-[16px] font-[500] text-[var(--color1)]`}>이메일을 입력해주세요.</div>
            <div className={`mt-[40px]`}>
              <article className={`flex flex-row items-center gap-0`}>
                <div className={`InputUi InputSm w-[148px]`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`이메일 입력`} />
                </div>
                <div className={`mx-[6px] text-[14px] font-[400] text-[var(--color1)]`}>@</div>
                <div
                  className={`SelectBox1 w-[148px]`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>-도메인 선택-</div>
                  </button>
                  <div className={`Options`}>
                    <button>gmail.com</button>
                    <button>naver.com</button>
                    <button>hotmail.com</button>
                    <button>daum.net</button>
                  </div>
                </div>
              </article>
            </div>
            <div className={`mt-[30px]`}>
              <button className={`ButtonStyle2 ButtonLg w-full`}>인증메일 받기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage18.Layout = LayoutSub;
export default PageMyPage18;
