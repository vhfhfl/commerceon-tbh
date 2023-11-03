function GradeBox1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`GradeBox1 ${className}`}>
        <article className={`RRR flex flex-row items-stretch gap-[14px]`}>
          <div className={`grow`}>
            <div className={`flex h-full flex-col justify-center rounded-[25px] bg-[var(--color7)] px-[58px]`}>
              <div className={`flex flex-row items-center gap-[22px]`}>
                <div className={`Text_940774ac`}>
                  다음달 예상등급은 <span className={`font-[600] text-[#B82C4E]`}>STAR</span>입니다.
                  <br />
                  산정 기간 : 2022-11-02~2023-05-02
                </div>
                <div className={`Bar_26704659`}>Bar</div>
                <div className={`Text_940774ac`}>
                  06월 02일까지 50,000원 추가 구매 확정 시
                  <br />
                  다음달 FRIENDS회원으로 등급 변경
                </div>
              </div>
              <div className={`MemberGradeBar mt-[36px]`}>
                <div className={`BarBox`}>
                  <div className={`Bar On`}>1</div>
                  <div className={`Bar On`}>2</div>
                  <div className={`Bar`}>3</div>
                  <div className={`Bar`}>4</div>
                </div>
                <div className={`CircleBox`}>
                  <div className={`Circle On`}>
                    <div className={`Label`}>일반</div>
                  </div>
                  <div className={`Circle On`}>
                    <div className={`Label`}>FRIENDS</div>
                  </div>
                  <div className={`Circle On`}>
                    <div className={`Label`}>FAMILY</div>
                  </div>
                  <div className={`Circle`}>
                    <div className={`Label`}>MANIA</div>
                  </div>
                  <div className={`Circle`}>
                    <div className={`Label`}>STAR</div>
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
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default GradeBox1;
