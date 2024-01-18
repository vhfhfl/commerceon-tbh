import LayoutSub9 from "@/layouts/LayoutSub9";

function PageErrorCode() {
  return (
    <div className={`PageErrorCode`}>
      <div className={`H-Box`}>
        <div className={`Inner`}>
          <section data-seq={`20240118144816868`} className={`mt-[100px] mb-[120px]`}>
            <article className={`flex flex-col items-center justify-start text-center`}>
              <div>
                <img className={`Icon`} src={`/icons_pc/icon_84.svg`} alt={``} />
              </div>
              <div className={`mt-[20px] text-[18px] font-[600] text-[var(--color1)] leading-[26px]`}>
                고객님이 요청하신 작업을
                <br/>
                <span className={`text-[#DC3545]`}>처리할 수 없습니다.</span>
              </div>
              <div className={`mt-[20px] text-[14px] font-[400] text-[var(--color1)] leading-[20px]`}>
                서비스 이용에 불편을 드려 죄송합니다.
                <br/>
                일시적 오류관련 문의를 고객센터에 알려주시면
                <br/>
                친절하게 안내해 드리겠습니다.
              </div>
            </article>
          </section>
          <section data-seq={`20240118145816868`} className={``}>
            <article className={`CenterBetween`}>
              <div className={`flex-1`}>
                <a href={`https://www.google.com`} className={`ButtonXl ButtonStyle1 w-full`}>
                  이전으로 이동
                </a>
              </div>
              <div className={`flex-1`}>
                <a href={`https://www.google.com`} className={`ButtonXl ButtonStyle2 w-full`}>
                  메인으로 이동
                </a>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

PageErrorCode.Layout = LayoutSub9;
export default PageErrorCode;