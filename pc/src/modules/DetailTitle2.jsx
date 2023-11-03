function DetailTitle2(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`DetailTitle2 ${className}`}>
        <article
          className={`relative flex flex-row items-center justify-between gap-[0] border-y-[1px] border-solid border-y-[var(--color3)] py-[17px]`}>
          <article className={`flex flex-row items-center gap-[0]`}>
            <div
              className={`inline-flex flex-row items-center justify-center gap-[0] bg-[var(--color1)] p-[10px_14px] text-[12px] font-[600] text-white`}>
              BRAND NAME
            </div>
            <div className={`ml-[20px] text-[20px] font-[600] text-[var(--color1)]`}>TBH SHOP 신규회원 혜택</div>
            <div className={`mx-[14px] h-[21px] w-[1px] bg-[var(--color3)] text-[0px]`}>Bar</div>
            <article className={`flex flex-row items-center gap-[5px] text-[20px] font-[400] text-[var(--color1)]`}>
              <div>#카라티셔츠</div>
              <div>#카라니트</div>
            </article>
          </article>
          <article className={`flex flex-row items-center justify-center gap-[10px]`}>
            <div className={`Montserrat text-[16px] font-[400] text-[var(--color5)]`}>조회수 : 12,584</div>
            <div>
              <article className={`CenterRight`}>
                <button
                  data-title={`공유하기 버튼`}
                  className={`flex aspect-square w-[35px] flex-row items-center justify-center gap-[0]`}>
                  <img
                    className={`Icon`}
                    src={`/icons/zco_51.svg`}
                    width={17}
                    height={19}
                    alt={``}
                    onClick={(evt) => {
                      const el = document.querySelector(`#SNSLayer-a406a6885387`);
                      el.classList.toggle('On');
                    }}
                  />
                </button>
              </article>
              <div
                id={`SNSLayer-a406a6885387`}
                data-title={`SNS 레이어`}
                className={`absolute top-full right-[0] z-10 hidden w-max rounded-[100px] border border-[var(--color6)] bg-white [&.On]:block`}
                style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                <ul className={`flex flex-row items-center gap-[10px] p-[10px_14px] text-[0]`}>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_35_1.svg`} width={29} height={29} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_35_2.svg`} width={29} height={29} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_35_3.svg`} width={29} height={29} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_35_4.svg`} width={29} height={29} alt={``} />
                    </button>
                  </li>
                  <li>
                    <button>
                      <img className={`Icon`} src={`/icons/icon_35_5.svg`} width={29} height={29} alt={``} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </article>
      </div>
    </>
  );
}

export default DetailTitle2;
