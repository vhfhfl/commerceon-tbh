import { Util } from '@/scripts/util';

function FormTable2(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable2 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>혜택 상품 할인</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] items-center gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                  <div className={`mt-[4px] flex flex-row items-start gap-[0]`}>
                    <img src={`/icons/zco_58.svg`} alt={``} />
                    <div className={`ml-[6px] text-[14px] font-[400]`}>
                      <div className={`text-[var(--color5)]`}>마인드브릿지 티셔츠 교차 39,900원 할인</div>
                      <div className={`Montserrat mt-[10px] text-[var(--color1)]`}>- 19,950원</div>
                    </div>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>상품 쿠폰</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] items-center gap-[0] text-[14px]`}>
                  <div className={`Montserrat font-[600] leading-[36px] text-[var(--color1)]`}>39,900원</div>
                  <div className={`font-[400] text-[var(--color5)]`}>
                    상품 쿠폰은 상단 리스트에서 변경할 수 있습니다.
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>할인 코드</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] items-start gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                  <article className={`flex flex-row items-center gap-[5px]`}>
                    <input className={`TextInput2 w-[250px]`} type={`text`} placeholder={`할인코드 입력`} />
                    <button className={`ButtonMd ButtonStyle4 Round`}>코드 입력</button>
                  </article>
                </article>
              </td>
            </tr>
            <tr>
              <td>회원 등급 할인</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>주문 쿠폰</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                  <div>
                    <article className={`flex flex-row items-center gap-[0]`}>
                      <div
                        className={`SelectBox1 w-[172px]`}
                        onClick={(evt) => {
                          const target = evt.target.closest('.SelectBox1');
                          Util.toggleClass(target, 'On');
                        }}>
                        <button>
                          <div>쿠폰 선택</div>
                        </button>
                        <div className={`Options`}>
                          <button>A</button>
                          <button>B</button>
                          <button>C</button>
                        </div>
                      </div>
                      <div className={`ml-[10px] text-[14px] font-[400] text-[var(--color5)]`}>(보유 1장)</div>
                      <button className={`ButtonMd ButtonStyle4 Round ml-[43px]`}>다운로드 가능 쿠폰</button>
                    </article>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>배송비 쿠폰</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                  <div>
                    <article className={`flex flex-row items-center gap-[0]`}>
                      <div
                        className={`SelectBox1 w-[172px]`}
                        onClick={(evt) => {
                          const target = evt.target.closest('.SelectBox1');
                          Util.toggleClass(target, 'On');
                        }}>
                        <button>
                          <div>쿠폰 선택</div>
                        </button>
                        <div className={`Options`}>
                          <button>A</button>
                          <button>B</button>
                          <button>C</button>
                        </div>
                      </div>
                    </article>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>마일리지 사용</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] items-start gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                  <div>
                    <article className={`flex flex-row items-center gap-[5px]`}>
                      <input className={`TextInput2 w-[250px]`} type={`text`} />
                      <span className={`ml-[3px] mr-[10px] text-[14px] font-[400] text-[var(--color5)]`}>원</span>
                      <button className={`ButtonMd ButtonStyle4 Round w-[110px]`}>사용</button>
                      <button className={`ButtonMd ButtonStyle2 Round w-[110px]`}>전액 사용</button>
                    </article>
                    <div className={`mt-[8px] text-[14px] font-[400] text-[var(--color13)]`}>
                      보유한 마일리지를 초과하였습니다.
                    </div>
                    <article className={`mt-[8px] text-[14px] font-[400]`}>
                      <span>보유 마일리지 : </span>
                      <span className={`text-[var(--color2)]`}>380원</span>
                    </article>
                    <div className={`mt-[8px] text-[14px] font-[400] text-[var(--color5)]`}>
                      상품 합계 금액이 30,000원 이상인 경우에만 사용 가능합니다.
                    </div>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>복지포인트 사용</td>
              <td>
                <article className={`grid grid-cols-[116px_1fr] items-start gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[600] leading-[36px] text-[var(--color1)]`}>
                    39,900원
                  </div>
                  <div>
                    <article className={`flex flex-row items-center gap-[5px]`}>
                      <input className={`TextInput2 w-[250px]`} type={`text`} />
                      <span className={`ml-[3px] mr-[10px] text-[14px] font-[400] text-[var(--color5)]`}>원</span>
                      <button className={`ButtonMd ButtonStyle4 Round w-[110px]`}>사용</button>
                      <button className={`ButtonMd ButtonStyle2 Round w-[110px]`}>전액 사용</button>
                    </article>
                    <article className={`mt-[8px] text-[14px] font-[400]`}>
                      <span>보유 포인트 : </span>
                      <span className={`text-[var(--color2)]`}>380원</span>
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

export default FormTable2;
