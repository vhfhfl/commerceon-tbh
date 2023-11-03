import { Fragment } from 'react';
import CheckBox1 from '@/components/form/CheckBox1';
import ItemFlag1 from '@/components/common/ItemFlag1';
import TermsBox from '@/modules/TermsBox';

function FormTable7(props) {
  const { className = '' } = props;
  
  return (
    <>
      <div className={`FormTable7 ${className}`}>
        <table className={`Table3 NoBorder NoTop`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td colSpan={2}>
                <article className={`CenterBetween`}>
                  <div>
                    <CheckBox1 size={'Sm'} />
                  </div>
                  <div>
                    <button className={`ButtonSm ButtonStyle4 Round w-[84px]`}>선택상품 삭제</button>
                    <button className={`ButtonSm ButtonStyle4 Round ml-[5px] w-[64px]`}>모두 삭제</button>
                  </div>
                </article>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className={`py-[70px] text-center text-[var(--color1)] font-[400]`}>
                  등록된 상품이 없습니다.
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className={`!pt-0`}>
                <div className={`space-y-[14px] divide-y-[1px] divide-solid divide-[var(--color6)]`}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <div className={`pt-[14px]`}>
                          <div>
                            <CheckBox1 />
                          </div>
                          <article className={`mt-[10px] grid grid-cols-[1fr_90px] gap-[10px]`}>
                            <div className={`flex min-w-[0] flex-col justify-between gap-0`}>
                              <div className={`w-full`}>
                                <div className={`Montserrat font-[600] text-[var(--color1)]`}>
                                  MIND BRIDGE
                                </div>
                                <div
                                  className={`mt-[8px] min-w-0 truncate text-[var(--color1)] font-[400]`}>
                                  [1&1 교차가능]그래픽티셔츠 2종 여름 라운드 반팔티셔츠 교차상품
                                </div>
                              </div>
                              <div>
                                <article className={`mt-[16px] flex flex-row items-center gap-0`}>
                                  <button>
                                    <img className={`Icon`} src={`/icons/icon_40_1.svg`} alt={`마이너스`} />
                                  </button>
                                  <div
                                    className={`Montserrat min-w-[38px] text-center font-[500] text-[var(--color1)]`}>
                                    99
                                  </div>
                                  <button>
                                    <img className={`Icon`} src={`/icons/icon_40_2.svg`} alt={`플러스`} />
                                  </button>
                                </article>
                              </div>
                            </div>
                            <div className={`relative h-[120px]`}>
                              <img src={`https://picsum.photos/90/120.jpg?random=${idx}`} alt={``} />
                              <div className={`absolute top-[0] right-[0] z-10`}>
                                <ItemFlag1 theme={idx}>1+1</ItemFlag1>
                              </div>
                            </div>
                          </article>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <td>구매 희망 일자</td>
              <td>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} placeholder={`2023-07-08`} />
                </div>
              </td>
            </tr>
            <tr>
              <td>추가 문의 내용</td>
              <td>
                <textarea className={`TAREA-1`}></textarea>
              </td>
            </tr>
            <tr>
              <td>자동등록방지</td>
              <td>
                <img src={`https://gifpng.com/238x55/`} alt={``} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className={`font-[600]`}>
                <div>비회원 개인정보 수집 동의</div>
                <div className={`mt-[14px]`}>
                  <TermsBox className={`h-[244px]`} />
                </div>
                <div className={`mt-[14px] grid grid-cols-[1fr_62px] items-start justify-between gap-0`}>
                  <CheckBox1 size={'Sm'} className={`!items-start`}>
                    <div>
                      <span className={`text-[var(--color13)]`}>(필수)</span>
                      &nbsp;
                      <span>
                        비회원 글 작성에 대한 개인정보 수집 및
                        <br />
                        이용동의
                      </span>
                    </div>
                  </CheckBox1>
                  <a className={`Btn_2`} href={`https://www.google.com`} target={`_blank`}>
                    전체보기
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable7;
