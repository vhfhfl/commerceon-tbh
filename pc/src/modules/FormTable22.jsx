import CheckBox1 from '@/components/form/CheckBox1';
import RadioBtn from '@/components/form/RadioBtn';
import TermsBox from '@/modules/TermsBox';

function FormTable22(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable22 ${className}`}>
        <table className={`Table1 Form`}>
          <tbody>
            <tr>
              <td>탈퇴사유</td>
              <td>
                <article className={`CenterLeft flex-wrap !gap-[21px]`}>
                  <RadioBtn>고객서비스(상담,포장) 불만</RadioBtn>
                  <RadioBtn>배송 불만</RadioBtn>
                  <RadioBtn>교환/환불/반품 불만</RadioBtn>
                  <RadioBtn>방문 빈도가 낮음</RadioBtn>
                  <RadioBtn>상품가격 불만</RadioBtn>
                  <RadioBtn>개인정보유출 우려</RadioBtn>
                  <RadioBtn>쇼핑몰의 신뢰도 불만</RadioBtn>
                </article>
              </td>
            </tr>
            <tr>
              <td>고객의견</td>
              <td>
                <textarea
                  className={`TAREA-1`}
                  placeholder={`개선 요청 사항이나 의견이 있으시면 기재 부탁드립니다.`}></textarea>
              </td>
            </tr>
            <tr>
              <td>탈퇴동의</td>
              <td>
                <div>
                  <TermsBox className={`h-[258px]`} />
                </div>
                <div className={`mt-[16px]`}>
                  <div>
                    <CheckBox1>
                      <span className={`text-[var(--color13)]`}>(필수)</span>
                      &nbsp;
                      <span>회원탈퇴 안내를 모두 확인하였으며 탈퇴에 동의합니다.</span>
                    </CheckBox1>
                  </div>
                  <div className={`mt-[10px]`}>
                    <CheckBox1>
                      <span className={`text-[var(--color13)]`}>(필수)</span>
                      &nbsp;
                      <span>고객님의 쿠폰 및 포인트 자동 소멸에 동의합니다.</span>
                    </CheckBox1>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable22;
