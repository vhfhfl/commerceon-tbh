import { Util } from '@/scripts/util';

function FormTable3(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable3 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <div className={`leading-[18px]`}>
                  혜택 상품 <br />
                  할인
                </div>
              </td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>39,900원</div>
                <article className={`mt-[12px] flex flex-row items-start gap-0`}>
                  <div>
                    <img className={`Icon`} src={`/icons/icon_54.svg`} alt={``} />
                  </div>
                  <div className={`ml-[6px] translate-y-[2px]`}>
                    <div className={`text-[var(--color5)]`}>마인드브릿지 티셔츠 교차 39,900원 할인</div>
                    <div className={`Montserrat mt-[6px] text-[var(--color1)]`}>- 19,950원</div>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td>상품 쿠폰</td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>1,500원</div>
                <div className={`mt-[12px] text-[var(--color5)]`}>
                  상품 쿠폰은 상단 리스트에서 변경할 수 있습니다.
                </div>
              </td>
            </tr>
            <tr>
              <td>할인 코드</td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>24,000원</div>
                <article className={`mt-[12px] flex flex-row items-center gap-[5px]`}>
                  <div className={`InputUi InputSm w-[156px]`} data-form-hei={`Md`}>
                    <input type={`text`} placeholder={`할인코드 입력`} />
                  </div>
                  <button className={`ButtonMd ButtonStyle4 Round`}>코드 입력</button>
                </article>
              </td>
            </tr>
            <tr>
              <td>
                <div className={`leading-[18px]`}>
                  회원 등급 <br />
                  할인
                </div>
              </td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>1,500원</div>
              </td>
            </tr>
            <tr>
              <td>주문 쿠폰</td>
              <td>
                <article className={`flex flex-row items-center gap-0`}>
                  <div className={`Montserrat font-[600] text-[var(--color1)]`}>1,000원</div>
                  <div className={`ml-[6px] text-[var(--color5)]`}>(보유 1장)</div>
                </article>
                <div className={`mt-[12px]`}>
                  <div
                    className={`SelectBox1 w-full`}
                    onClick={(evt) => {
                      const target = evt.target.closest('.SelectBox1');
                      Util.toggleClass(target, 'On');
                    }}>
                    <button>
                      <div>쿠폰 선택</div>
                    </button>
                    <div className={`Options`}>
                      <button>쿠폰 선택</button>
                      <button>쿠폰 선택</button>
                      <button>쿠폰 선택</button>
                    </div>
                  </div>
                  <div className={`mt-[6px]`}>
                    <button className={`ButtonMd ButtonStyle4 Round`}>다운로드 가능 쿠폰</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>배송비 쿠폰</td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>1,000원</div>
                <div className={`mt-[12px]`}>
                  <div
                    className={`SelectBox1 w-full`}
                    onClick={(evt) => {
                      const target = evt.target.closest('.SelectBox1');
                      Util.toggleClass(target, 'On');
                    }}>
                    <button>
                      <div>쿠폰 선택</div>
                    </button>
                    <div className={`Options`}>
                      <button>쿠폰 선택</button>
                      <button>쿠폰 선택</button>
                      <button>쿠폰 선택</button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>마일리지</td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>380원</div>
                <div className={`mt-[12px]`}>
                  <article className={`flex flex-row items-center gap-[6px]`}>
                    <div className={`InputUi InputSm w-[230px]`} data-form-hei={`Md`}>
                      <input defaultValue={`380`} />
                    </div>
                    <span className={`text-[var(--color5)]`}>원</span>
                  </article>
                  <div className={`mt-[8px] text-[var(--color13)]`}>보유한 마일리지를 초과하였습니다.</div>
                  <article className={`mt-[8px]`}>
                    <span>보유 마일리지 : </span>
                    <span className={`text-[var(--color2)]`}>380원</span>
                  </article>
                  <div className={`mt-[8px] leading-[18px] text-[var(--color5)]`}>
                    상품 합계 금액이 30,000원 이상인 경우에만 사용 가능합니다.
                  </div>
                  <article className={`mt-[20px] flex flex-row items-center gap-[6px]`}>
                    <button className={`ButtonMd ButtonStyle4 Round w-[110px] grow`}>사용</button>
                    <button className={`ButtonMd ButtonStyle2 Round w-[110px] grow`}>전액 사용</button>
                  </article>
                </div>
              </td>
            </tr>
            <tr>
              <td>복지포인트</td>
              <td>
                <div className={`Montserrat font-[600] text-[var(--color1)]`}>10,000원</div>
                <div className={`mt-[12px]`}>
                  <article className={`flex flex-row items-center gap-[6px]`}>
                    <div className={`InputUi InputSm w-[230px]`} data-form-hei={`Md`}>
                      <input type={`text`} placeholder={`0`} />
                    </div>
                    <span className={`text-[var(--color5)]`}>원</span>
                  </article>
                  <div className={`mt-[8px]`}>
                    <span>보유 포인트 : </span>
                    <span className={`text-[var(--color2)]`}>101,860원</span>
                  </div>
                  <article className={`mt-[20px] flex flex-row items-center gap-[6px]`}>
                    <button className={`ButtonMd ButtonStyle4 Round w-[110px] grow`}>사용</button>
                    <button className={`ButtonMd ButtonStyle2 Round w-[110px] grow`}>전액 사용</button>
                  </article>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable3;
