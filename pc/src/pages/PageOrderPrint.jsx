import LayoutEmpty from '@/layouts/LayoutEmpty';

function PageOrderPrint() {
  return (
    <div className={`PageOrderPrint`}>
      <div className={`RR SubContainer3`}>
        <div className={`px-[30px] pt-[30px] pb-[100px]`}>
          <section data-seq={`20230706175557084`}>
            <article className={`flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>견적서</div>
              </div>
              <div>
                <button className={`ButtonMd ButtonStyle4 w-[112px]`}>인쇄하기</button>
              </div>
            </article>
          </section>
          <section data-seq={`20230706175648841`} className={`mt-[20px]`}>
            <div
              className={`border-t-[3px] border-solid border-t-[var(--color1)] p-[30px] text-[14px] font-[400] leading-[22px] text-[var(--color1)]`}>
              <ul className={`Ul-f0743e775926`}>
                <li>합계 금액은 적용한 쿠폰 및 할인 혜택을 기준으로 표기됩니다.</li>
                <li>합계 금액은 적용한 쿠폰 및 할인 혜택을 기준으로 표기됩니다.</li>
              </ul>
            </div>
            <div className={`BTop1 pt-[50px]`}>
              <img className={`mx-auto`} src={`https://gifpng.com/483x534/`} alt={``} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageOrderPrint.Layout = LayoutEmpty;
export default PageOrderPrint;
