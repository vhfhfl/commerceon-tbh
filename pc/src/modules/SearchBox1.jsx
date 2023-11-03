function SearchBox1(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`SearchBox1 ${className}`}>
        <article className={`grid grid-cols-[1fr_347px] gap-[37px]`}>
          <div>
            <div className={`h-full rounded-[25px] bg-[var(--color7)] px-[38px] pt-[36px] pb-[45px]`}>
              <div className={`Montserrat text-[28px] font-[600] text-[var(--color1)]`}>FAQ SEARCH</div>
              <div
                className={`mt-[25px] h-[60px] w-[450px] rounded-[2px] border-[1px] border-solid border-[var(--color3)] py-[8px] px-[18px]`}>
                <div className={`flex h-full flex-row items-center justify-center gap-[0]`}>
                  <input className={`grow bg-transparent placeholder-[var(--color3)]`} placeholder={`검색어를 입력하세요.`} />
                  <button className={`flex flex-row items-center justify-center gap-[0]`}>
                    <img src={`/icons/zco_68.svg`} alt={``} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`rounded-[25px] bg-[var(--color15)] py-[26px] px-[43px]`}>
              <div className={`text-[22px] font-[600] leading-[30px] text-[white]`}>고객센터 이용안내</div>
              <div className={`Montserrat text-[36px] text-[var(--color2)]`}>1666-7963</div>
              <div className={`mt-[18px] text-[14px] font-[400] leading-[20px] text-[white]`}>
                운영시간 : 평일 10:00~17:00
                <br />
                금요일 10:00 ~ 16:00
                <br />
                점심시간 12:00 ~ 13:00
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default SearchBox1;
