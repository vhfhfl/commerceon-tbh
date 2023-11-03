import LayoutSub from '@/layouts/LayoutSub';
import MyPageMenu from '@/modules/MyPageMenu';

function PageMyPage2() {
  return (
    <div className={`PageMyPage2`}>
      <section data-seq={`20230807124543`} className={`bg-[var(--color7)] pt-[40px] pb-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <article className={`flex flex-row items-start justify-between gap-0`}>
                <div>
                  <img className={`Icon`} src={`/icons/icon_69.svg`} alt={``} />
                </div>
                <div className={`ml-[27px]`}>
                  <div className={`text-[22px] font-[600] leading-[32px] text-[var(--color1)]`}>
                    홍길동님의 회원 등급은
                    <br />
                    <span className={`text-[var(--color2)]`}>TBH글로벌 임직원 회원</span>
                    <br />
                    입니다.
                  </div>
                  <div className={`mt-[20px]`}>
                    <button className={`ButtonSm ButtonStyle4`}>등급혜택보기</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807124547`}>
        <div className={`border-b-[1px] border-solid border-b-white`}>
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
        </div>
        <div>
          <a
            className={`block bg-[var(--color6)] px-[20px] pt-[17px] pb-[20px]`}
            href='https://www.google.com'
            target='_blank'>
            <div className={`text-[12px] font-[600] text-[var(--color1)]`}>복지포인트</div>
            <article className={`CenterLeft mt-[10px]`}>
              <div
                className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                1,000,000
              </div>
              <div className={`ml-[3px] text-[14px] font-[600] text-[var(--color1)]`}>원</div>
            </article>
          </a>
        </div>
      </section>
      <section data-seq={`20230807124553`} className={`mt-[40px]`}>
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

PageMyPage2.Layout = LayoutSub;
export default PageMyPage2;
