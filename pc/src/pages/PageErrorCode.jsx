import LayoutBasic from '@/layouts/LayoutBasic';

function PageErrorCode() {
  return (
    <div className={`PageErrorCode`}>
      <div className={`SubContainer my-[180px]`}>
        <section data-seq={`20240118144816868`} className={``}>
          <article className={`flex flex-col items-center justify-start text-center`}>
            <div>
              <img className={`Icon`} src={`/icons/icon_52.svg`} alt={``} />
            </div>
            <div className={`mt-[20px] text-[22px] font-[600] text-[var(--color1)] leading-[32px]`}>
              고객님이 요청하신 작업을
              <br/>
              <span className={`text-[#DC3545]`}>처리할 수 없습니다.</span>
            </div>
            <div className={`mt-[28px] text-[16px] font-[400] text-[var(--color1)] leading-[24px]`}>
              서비스 이용에 불편을 드려 죄송합니다.
              <br/>
              일시적 오류관련 문의를 고객센터에 알려주시면
              <br/>
              친절하게 안내해 드리겠습니다.
            </div>
          </article>
        </section>
        <section data-seq={`20240118145816868`} className={`mt-[200px]`}>
          <article className={`flex flex-row items-center justify-center gap-[24px]`}>
            <div>
              <a href={`https://www.google.com`} className={`ButtonXl ButtonStyle1 w-[190px]`}>
                이전으로 이동
              </a>
            </div>
            <div>
              <a href={`https://www.google.com`} className={`ButtonXl ButtonStyle2 w-[190px]`}>
                메인으로 이동
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

PageErrorCode.Layout = LayoutBasic;
export default PageErrorCode;