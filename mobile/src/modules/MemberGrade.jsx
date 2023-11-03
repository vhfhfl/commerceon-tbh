function MemberGrade(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`MemberGrade ${className}`}>
        <article className={`flex flex-row items-end justify-between gap-0`}>
          <div>
            <div className={`text-[22px] font-[600] leading-[32px] text-[var(--color1)]`}>
              홍길동님의
              <br />
              05월 회원 등급은
              <br />
              <span className={`text-[#B82C4E]`}>STAR</span>입니다.
            </div>
          </div>
          <div>
            <button className={`ButtonSm ButtonStyle4`}>등급혜택보기</button>
          </div>
        </article>
        <div className={`mt-[30px]`}>
          <article className={`grid grid-cols-[82px_1fr] items-center gap-0`}>
            <div>
              <article
                className={`flex aspect-square w-full flex-row items-center justify-center gap-0 rounded-full bg-[#B82C4E] text-[14px] font-[600] text-white`}>
                STAR
              </article>
            </div>
            <div className={`ml-[17px] text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
              <div>
                다음달 예상등급은 <span className={`font-[600] text-[#B82C4E]`}>STAR</span>입니다.
                <br />
                산정 기간 : 2022-11-02~2023-05-02
              </div>
              <div className={`mt-[11px]`}>
                06월 02일까지 50,000원 추가 구매 확정 시
                <br />
                다음달 FRIENDS회원으로 등급 변경
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default MemberGrade;
