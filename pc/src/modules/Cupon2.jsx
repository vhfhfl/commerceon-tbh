function Cupon2() {
  return (
    <>
      <div className={`Cupon2`}>
        <div className={`rounded-t-[6px] border-[1px] border-b-0 border-[#ececec]`}>
          <div className={`p-[20px]`}>
            <div className={`text-[14px] font-[400] text-[#161616]`}>개인정보수정 감사 쿠폰</div>
            <article className={`CenterLeft mt-[12px]`}>
              <div className={`text-[28px] font-[700] text-[#161616]`}>10% 할인</div>
              <div
                className={`ml-[4px] inline-flex h-[26px] flex-row items-center justify-center gap-[0] rounded-[20px] bg-[var(--color2)] px-[6px] text-[12px] font-[600] text-[#fff]`}>
                <img className={`ml-[1px]`} src={`/icons/zco_87.svg`} alt={``} />
                2장
              </div>
            </article>
            <article className={`CenterBetween mt-[50px]`}>
              <div>
                <div className={`text-[10px] font-[400] text-[#888]`}>2023.04.09까지 사용가능</div>
              </div>
              <div>
                <div className={`text-[10px] font-[400] text-[#68f]`}>상품쿠폰</div>
              </div>
            </article>
          </div>
          <article className={`border-t-[2px] border-dotted border-t-[#ececec]`}>
            <button className={`CenterCenter h-[50px] w-full rounded-b-[6px] bg-[#ececec] px-[44px]`}>
              <div className={`text-[12px] font-[400] text-[#d4d4d4]`}>발급완료</div>
            </button>
          </article>
        </div>
      </div>
    </>
  );
}

export default Cupon2;
