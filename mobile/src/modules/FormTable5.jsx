import { Fragment } from 'react';
import { Util } from '@/scripts/util';

function FormTable5(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable5 ${className}`}>
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
                  아쿠아스큐텀 여성 피마코튼스판 스트라이프 셔츠
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
              <td>선택한 옵션
              </td>
              <td>
                <div className={`Montserrat text-[var(--color1)]`}>WHITE/026</div>
              </td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>
                <div className={`flex flex-row items-center gap-[6px]`}>
                  <div
                    className={`SelectBox1 w-[69px]`}
                    onClick={(evt) => {
                      const target = evt.target.closest('.SelectBox1');
                      Util.toggleClass(target, 'On');
                    }}>
                    <button>
                      <div className={`!text-[12px]`}>010</div>
                    </button>
                    <div className={`Options`}>
                      <button>010</button>
                      <button>010</button>
                      <button>010</button>
                    </div>
                  </div>
                  <input className={`TextInput2 w-[69px] !text-[12px]`} type={`text`} />
                  <input className={`TextInput2 w-[69px] !text-[12px]`} type={`text`} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable5;
