import { Fragment } from 'react';
import ProductItem19 from '@/modules/ProductItem19';

function InfoTable11(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable11 ${className}`}>
        <table className={`Table3 NoBorder`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>문의유형</td>
              <td>기타문의</td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>홍** / 골드 (106.241.02.3)</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <div className={`text-[12px] font-[400] leading-[18px] text-[var(--color1)]`}>
                  <div>test@naver.com</div>
                  <div className={`text-[var(--color5)]`}>(답변시 메일 알림 미희망)</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>휴대폰번호</td>
              <td>
                <div className={`text-[12px] font-[400] leading-[18px] text-[var(--color1)]`}>
                  <div>010-0000-0000</div>
                  <div className={`text-[var(--color5)]`}>(답변시 SMS 또는 카카오 알림톡 알림 희망)</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>작성일시</td>
              <td>2023-08-09</td>
            </tr>
            <tr>
              <td>상태</td>
              <td>답변전</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>제목입니다</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>선택상품</div>
                <div className={`mt-[14px]`}>
                  <ProductItem19 />
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className={`text-[12px] font-[400] leading-[18px] text-[var(--color5)]`}>
                  <div className={`pl-[8px]`}>
                    내용입니다.
                    <br />
                    문의 내용은 여기에 적습니다.
                    <br />
                    수정불가합니다.
                    <br />
                    문의사항
                    <br />
                  </div>
                  <div className={`mt-[14px]`}>
                    <div className={`mx-auto w-[305px] bg-[var(--color7)] p-[14px]`}>
                      관리자 답변입니다.
                      <br />
                      안녕하세요 관리자 답변입니다.
                      <br />
                      관리자 답변
                      <br />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className={`overflow-auto pt-[12px]`}>
                  <ul className={`flex flex-row items-center gap-[22px]`}>
                    {Array.from(Array(5)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <li className={`relative`}>
                            <div>
                              <img src={`https://picsum.photos/56/77.jpg?random=${idx}`} alt={``} />
                            </div>
                            <button className={`absolute top-[-12px] right-[-12px] z-10`}>
                              <img className={`Icon`} src={`/icons/icon_80.svg`} alt={``} />
                            </button>
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable11;
