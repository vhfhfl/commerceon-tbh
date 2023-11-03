import LayoutSub from '@/layouts/LayoutSub';
import MyPageMenu from '@/modules/MyPageMenu';
import MemberGradeIcon from '@/modules/MemberGradeIcon';
import MemberGrade from '@/modules/MemberGrade';

function PageMyPage1() {
  return (
    <div className={`PageMyPage1`}>
      <section data-seq={`20230729093727858`} className={`bg-[var(--color7)] py-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <MemberGrade />
            </div>
            <div className={`mt-[40px]`}>
              <MemberGradeIcon />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230803210340`}>
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
            className={`bg-[var(--color6)] px-[20px] pt-[17px] pb-[20px]`}
            href='https://www.google.com'
            target='_blank'>
            <div className={`text-[12px] font-[600] text-[var(--color1)]`}>마일리지</div>
            <article className={`CenterLeft mt-[10px]`}>
              <div
                className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                0
              </div>
              <div className={`ml-[3px] text-[14px] font-[600] text-[var(--color1)]`}>원</div>
            </article>
          </a>
        </article>
      </section>
      <section data-seq={`20230717183836`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`flex flex-row items-start justify-between gap-0`}>
              <div className={`Title-3`}>
                <div className={`Txt1`}>쇼핑정보</div>
              </div>
              <div>
                <button className={`Button8-1`}>
                  <div className={`mr-[3px] flex flex-row items-center justify-center gap-0`}>
                    <img src={`/icons/icon_68_1.svg`} alt={``} />
                  </div>
                  <div className={`text-[10px] font-[400] text-[white]`}>라이브소식 받는중</div>
                </button>
                <button className={`Button8-2`}>
                  <div className={`mr-[3px] flex flex-row items-center justify-center gap-0`}>
                    <img src={`/icons/icon_68_2.svg`} alt={``} />
                  </div>
                  <div className={`text-[10px] font-[400] text-[#FE3839]`}>라이브 소식받기</div>
                </button>
              </div>
            </article>
            <div>
              <MyPageMenu />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage1.Layout = LayoutSub;
export default PageMyPage1;
