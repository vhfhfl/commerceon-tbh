function GradeTable1() {
  return (
    <>
      <article className={`GradeTable1 FLEX flex flex-row items-start justify-between gap-[18px]`}>
        <div>
          <div className={`mx-auto aspect-square w-[26px] rounded-full bg-[#FFB800] text-[0px]`}>Circle</div>
          <div className={`relative mt-[16px] w-[26px] text-[12px] font-[400] text-[#888]`}>
            <div className={`relative left-1/2 inline-block -translate-x-1/2 whitespace-nowrap`}>
              <span className={`text-[#FFB800]`}>일반</span>
            </div>
          </div>
        </div>
        <img className={`mt-[10px] last:hidden`} src={`/icons/zco_77.svg`} alt={``} />
        <div>
          <div className={`mx-auto aspect-square w-[26px] rounded-full bg-[#30BB24] text-[0px]`}>Circle</div>
          <div className={`relative mt-[16px] w-[26px] text-[12px] font-[400] text-[#888]`}>
            <div className={`relative left-1/2 inline-block -translate-x-1/2 whitespace-nowrap`}>
              <span className={`text-[#30BB24]`}>FRIENDS</span>
            </div>
          </div>
        </div>
        <img className={`mt-[10px] last:hidden`} src={`/icons/zco_77.svg`} alt={``} />
        <div>
          <div className={`mx-auto aspect-square w-[26px] rounded-full bg-[#1594B0] text-[0px]`}>Circle</div>
          <div className={`relative mt-[16px] w-[26px] text-[12px] font-[400] text-[#888]`}>
            <div className={`relative left-1/2 inline-block -translate-x-1/2 whitespace-nowrap`}>
              <span className={`text-[#1594B0]`}>FAMILY</span>
            </div>
          </div>
        </div>
        <img className={`mt-[10px] last:hidden`} src={`/icons/zco_77.svg`} alt={``} />
        <div>
          <div className={`mx-auto aspect-square w-[26px] rounded-full bg-[#875DBC] text-[0px]`}>Circle</div>
          <div className={`relative mt-[16px] w-[26px] text-[12px] font-[400] text-[#888]`}>
            <div className={`relative left-1/2 inline-block -translate-x-1/2 whitespace-nowrap`}>
              <span className={`text-[#875DBC]`}>MANIA</span>
            </div>
          </div>
        </div>
        <img className={`mt-[10px] last:hidden`} src={`/icons/zco_77.svg`} alt={``} />
        <div>
          <div className={`mx-auto aspect-square w-[26px] rounded-full bg-[#B82C4E] text-[0px]`}>Circle</div>
          <div className={`relative mt-[16px] w-[26px] text-[12px] font-[400] text-[#888]`}>
            <div className={`relative left-1/2 inline-block -translate-x-1/2 whitespace-nowrap`}>
              <span className={`text-[#B82C4E]`}>STAR</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default GradeTable1;
