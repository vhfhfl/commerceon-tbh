import LayoutSub from '@/layouts/LayoutSub';
import FormTable18 from '@/modules/FormTable18';

function PageMyPage28() {
  return (
    <div className={`PageMyPage28`}>
      <section data-seq={`20230816141052`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>회원탈퇴신청</div>
            </div>
            <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
              <a
                className={`border-r-[1px] border-r-white bg-[var(--color6)] px-[20px] pt-[17px] pb-[20px]`}
                href='https://www.google.com'
                target='_blank'>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>쿠폰</div>
                <article className={`CenterLeft mt-[10px]`}>
                  <div
                    className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                    2
                  </div>
                  <div className={`ml-[3px] text-[14px] font-[600] text-[var(--color1)]`}>장</div>
                </article>
              </a>
              <a
                className={`border-r-[1px] border-r-white bg-[var(--color6)] px-[20px] pt-[17px] pb-[20px]`}
                href='https://www.google.com'
                target='_blank'>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>마일리지</div>
                <article className={`CenterLeft mt-[10px]`}>
                  <div
                    className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                    0
                  </div>
                  <div className={`ml-[3px] text-[14px] font-[600] text-[var(--color1)]`}>장</div>
                </article>
              </a>
              <a
                className={`bg-[var(--color6)] px-[20px] pt-[17px] pb-[20px]`}
                href='https://www.google.com'
                target='_blank'>
                <div className={`text-[12px] font-[600] text-[var(--color1)]`}>구매중인 상품</div>
                <article className={`CenterLeft mt-[10px]`}>
                  <div
                    className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                    2
                  </div>
                  <div className={`ml-[3px] text-[14px] font-[600] text-[var(--color1)]`}>원</div>
                </article>
              </a>
            </article>
            <div className={`mt-[30px]`}>
              <FormTable18 />
            </div>
            <div className={`mt-[40px]`}>
              <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
                <button className={`ButtonStyle1 ButtonXl`}>취소</button>
                <button className={`ButtonStyle2 ButtonXl`}>확인</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage28.Layout = LayoutSub;
export default PageMyPage28;
