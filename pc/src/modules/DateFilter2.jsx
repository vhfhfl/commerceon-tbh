function DateFilter2() {
  return (
    <>
      <div className={`DateFilter2`}>
        <table className={`Table1`}>
          <tbody>
            <tr>
              <td className={`w-[120px]`}>
                <div>조회기간</div>
              </td>
              <td>
                <article className={`flex flex-row items-center justify-between gap-[0]`}>
                  <div>
                    <article className={`ButtonSet-230621124904495`}>
                      <button className={`On`}>오늘</button>
                      <button>7일</button>
                      <button>15일</button>
                      <button>1개월</button>
                      <button>3개월</button>
                      <button>1년</button>
                    </article>
                  </div>
                  <div>
                    <article className={`flex flex-row items-center gap-[6px]`}>
                      <div
                        className={`relative flex h-[36px] w-[128px] flex-row items-center gap-[0] bg-[var(--color7)] pl-[12px] pr-[5px]`}>
                        <input
                          type={`text`}
                          defaultValue={`2023-05-23`}
                          className={`h-full w-full bg-transparent text-[12px] font-[400] text-[var(--color1)] outline-0`}
                        />
                        <button
                          className={`absolute top-[0] right-[5px] z-10 flex aspect-square h-full w-[24px] flex-row items-center justify-center gap-[0]`}>
                          <img src={`/icons/zco_66.svg`} alt={``} />
                        </button>
                      </div>
                      <div
                        className={`relative flex h-[36px] w-[128px] flex-row items-center gap-[0] bg-[var(--color7)] pl-[12px] pr-[5px]`}>
                        <input
                          type={`text`}
                          defaultValue={`2023-05-23`}
                          className={`h-full w-full bg-transparent text-[12px] font-[400] text-[var(--color1)] outline-0`}
                        />
                        <button
                          className={`absolute top-[0] right-[5px] z-10 flex aspect-square h-full w-[24px] flex-row items-center justify-center gap-[0]`}>
                          <img src={`/icons/zco_66.svg`} alt={``} />
                        </button>
                      </div>
                      <button className={`ButtonMd ButtonStyle2`}>조회</button>
                    </article>
                  </div>
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DateFilter2;
