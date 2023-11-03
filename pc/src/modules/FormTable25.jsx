import { Fragment } from 'react';

function FormTable25(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable25 ${className}`}>
        <table className={`Table1 Form NoPadding PaddingLeftSm NoBorder table-fixed`}>
          <tbody>
            <tr>
              <td className={`!w-[80px] text-[12px] !leading-[12px]`}>상품명</td>
              <td>
                <div className={`truncate text-[14px] font-[400] leading-[16px]`}>
                  별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의
                  가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤 이름을
                  까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별 멀듯이, 걱정도
                  오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다. 위에도 없이 하나에
                  까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리 잔디가 나는 무덤
                  까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                </div>
              </td>
            </tr>
            <tr>
              <td className={`!w-[80px] text-[12px] !leading-[12px]`}>컬러</td>
              <td>
                <article className={`inline-grid grid-cols-7 gap-[5px]`}>
                  {Array.from(Array(15)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`ColorButton30`}>
                          <img src='/icons/zco_48_1.svg' alt='' />
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
              </td>
            </tr>
            <tr>
              <td className={`!w-[80px] text-[12px] !leading-[12px]`}>사이즈</td>
              <td>
                <article className={`inline-grid grid-cols-4 gap-[5px]`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`SizeButton32`}>030</button>
                        <button className={`SizeButton32 On`}>030</button>
                        <button className={`SizeButton32 Disabled`}>030</button>
                      </Fragment>
                    );
                  })}
                </article>
              </td>
            </tr>
            <tr>
              <td className={`!w-[80px] text-[12px] !leading-[12px]`}>선택한 옵션</td>
              <td>
                <div className={`Montserrat text-[14px] font-[400] text-[var(--color1)]`}>BLACK/30</div>
              </td>
            </tr>
            <tr>
              <td className={`!w-[80px] text-[12px] !leading-[12px]`}>휴대폰 번호</td>
              <td>
                <article className={`flex flex-row items-center gap-[7px]`}>
                  <div
                    className={`SelectBox1 w-[78px]`}
                    onClick={(evt) => {
                      const target = evt.target.closest('.SelectBox1');
                      Util.toggleClass(target, 'On');
                    }}>
                    <button>
                      <div>010</div>
                    </button>
                    <div className={`Options`}>
                      <button>VIP감사 7%</button>
                      <button>VIP감사 7%</button>
                      <button>VIP감사 7%</button>
                    </div>
                  </div>
                  <input className={`TextInput2 w-[78px]`} type={`text`} />
                  <input className={`TextInput2 w-[78px]`} type={`text`} />
                </article>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable25;
