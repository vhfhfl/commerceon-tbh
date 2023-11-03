function MemberGrade2(props) {
  const { className = '' } = props;

  return (
    <>
      <div className={`MemberGrade2 ${className}`}>
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
          <article
            className={`flex aspect-square w-[82px] flex-row items-center justify-center gap-0 rounded-full bg-[#B82C4E] text-[14px] font-[600] text-white`}>
            STAR
          </article>
        </div>
      </div>
    </>
  );
}

export default MemberGrade2;
