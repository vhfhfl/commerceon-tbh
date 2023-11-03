import { Fragment } from 'react';

function InfoTable7(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable7 ${className}`}>
        <table className={`Table3 NoBorder NoTop`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>상품명</td>
              <td>
                <div className={`Montserrat truncate leading-[16px]`}>
                  아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠 최대 1줄
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>컬러</div>
                <div className={`Montserrat mt-[8px] text-[10px] font-[500] text-[var(--color5)]`}>WHITE</div>
              </td>
              <td>
                <article className={`inline-grid grid-cols-7 gap-[5px]`}>
                  {Array.from(Array(15)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`ColorButton20`}>
                          <img className={`Icon`} src={`/icons/zco_33.svg`} alt={``} />
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
              </td>
            </tr>
            <tr>
              <td>사이즈</td>
              <td>
                <div className={`inline-grid grid-cols-4 gap-[5px]`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton32`}>030</button>
                        <button className={`SizeButton32 On`}>030</button>
                        <button className={`SizeButton32 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>선택한 옵션</div>
              </td>
              <td>
                <div className={`Montserrat text-[var(--color1)]`}>WHITE/026</div>
              </td>
            </tr>
            <tr>
              <td>수량</td>
              <td>
                <div className={`flex flex-row items-center gap-[0]`}>
                  <button>
                    <img className={`Icon`} src={`/icons/icon_49_2.svg`} alt={`마이너스`} />
                  </button>
                  <div className={`Montserrat min-w-[30px] text-center font-[500] text-[var(--color1)]`}>
                    99
                  </div>
                  <button>
                    <img className={`Icon`} src={`/icons/icon_49_1.svg`} alt={`플러스`} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable7;
