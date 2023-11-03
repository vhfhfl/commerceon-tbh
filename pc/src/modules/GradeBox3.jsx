import InfoTable6 from '@/modules/InfoTable6';

function GradeBox3() {
  return (
    <>
      <div className={`GradeBox3`}>
        <article className={`flex flex-row items-stretch gap-[14px]`}>
          <div className={`grow`}>
            <div className={`h-full rounded-[25px] bg-[var(--color7)] px-[40px] pt-[32px]`}>
              <div className={`text-[28px] font-[600] leading-[40px] text-[var(--color1)]`}>
                홍길동님의 회원 등급은
                <br />
                <span className={`text-[var(--color2)]`}>TBH글로벌 임직원 회원</span>입니다.
              </div>
              <div className={`mt-[9px]`}>
                <div className={`CenterLeft`}>
                  <div>
                    <img src={`/icons/zco_78.svg`} alt={``} />
                  </div>
                  <div className={`relative ml-[24px]`}>
                    <button
                      className={`ButtonMd ButtonStyle4`}
                      onClick={(evt) => {
                        const el = document.querySelector(`#GradeLayer-ade543249411`);
                        el.classList.toggle('On');
                      }}>
                      등급혜택보기
                    </button>
                    <div
                      id={`GradeLayer-ade543249411`}
                      className={`absolute top-0 right-[-342px] z-10 hidden bg-white [&.On]:block`}
                      style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                      <div className={`w-[320px] p-[20px]`}>
                        <div className={`text-[18px] font-[600] text-[var(--color1)]`}>등급 혜택 안내</div>
                        <div className={`mt-[28px]`}>
                          <InfoTable6 />
                        </div>
                      </div>
                      <div className={`mt-[20px]`}>
                        <button className={`PopupButton2 w-full`}>닫기</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex flex-row items-center justify-center gap-[10px]`}>
              <a className={`Button10 w-[168px]`} href='https://www.google.com' target='_blank'>
                <div className={`Text1`}>쿠폰</div>
                <div className={`Box1`}>
                  <div className={`Text2`}>2</div>
                  <div className={`Text3`}>장</div>
                </div>
              </a>
              <a className={`Button10 w-[168px]`} href='https://www.google.com' target='_blank'>
                <div className={`Text1`}>마일리지</div>
                <div className={`Box1`}>
                  <div className={`Text2`}>0</div>
                  <div className={`Text3`}>원</div>
                </div>
              </a>
              <a className={`Button10 w-[292px]`} href='https://www.google.com' target='_blank'>
                <div className={`Text1`}>복지포인트</div>
                <div className={`Box1`}>
                  <div className={`Text2`}>1,000,000</div>
                  <div className={`Text3`}>원</div>
                </div>
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default GradeBox3;
