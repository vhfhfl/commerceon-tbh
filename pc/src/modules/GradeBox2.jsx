import GradeTable1 from '@/modules/GradeTable1';

function GradeBox2(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`GradeBox2 ${className}`}>
        <article className={`flex flex-row items-stretch gap-[14px]`}>
          <div className={`grow`}>
            <div className={`flex h-full flex-col justify-center rounded-[25px] bg-[var(--color7)]`}>
              <div className={`flex flex-row items-center gap-[0] pl-[47px]`}>
                <div
                  className={`flex aspect-square w-[62px] flex-row items-center justify-center gap-[0] rounded-full bg-[#B82C4E] text-[12px] font-[600] text-[white]`}>
                  STAR
                </div>
                <div className={`Text_940774ac ml-[12px]`}>
                  다음달 예상등급은 <span className={`font-[600] text-[#B82C4E]`}>STAR</span>입니다.
                  <br />
                  산정 기간 : 2022-11-02~2023-05-02
                </div>
                <div className={`Bar_26704659 mx-[20px]`}>Bar</div>
                <div className={`Text_940774ac`}>
                  06월 02일까지 50,000원 추가 구매 확정 시
                  <br />
                  다음달 FRIENDS회원으로 등급 변경
                </div>
              </div>
              <div className={`mt-[32px] px-[65px]`}>
                <GradeTable1 />
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

export default GradeBox2;
