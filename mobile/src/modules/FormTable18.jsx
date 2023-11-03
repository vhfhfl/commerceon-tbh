import CheckBox1 from '@/components/form/CheckBox1';
import { Util } from '@/scripts/util';

function FormTable18(props) {
  const { className = '', idx } = props;
  return (
    <>
      <div className={`FormTable18 ${className}`}>
        <table className={`Table3 NoBorder NoTop`}>
          <colgroup>
            <col className={`w-[80px]`} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <td>탈퇴사유</td>
              <td>
                <div
                  className={`SelectBox1 w-full`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>사유를 선택해주세요.</div>
                  </button>
                  <div className={`Options`}>
                    <button>사유를 선택해주세요.</button>
                    <button>사유를 선택해주세요.</button>
                    <button>사유를 선택해주세요.</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>고객의견</td>
              <td>
                <textarea
                  className={`TAREA-1 !h-[95px]`}
                  placeholder={`개선 요청 사항이나 의견이 있으시면 기재 부탁드립니다.`}></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div>탈퇴동의</div>
                <div className={`mt-[13px]`}>
                  <div
                    className={`rounded-[2px] border-[1px] border-solid border-[var(--color6)] p-[10px] text-[12px] font-[400] leading-[16px] text-[var(--color1)]`}>
                    개선 요청 사항이나 의견이 있으시면
                    <br />
                    TNB SHOP 탈퇴 안내
                    <br />
                    <br />
                    회원님께서 회원탈퇴를 원하신다니 저희 쇼핑몰의 서비스가 많이 부족하고 미흡했나 봅니다.
                    <br />
                    불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의 불편함을 해결해 드리도록
                    노력하겠습니다.
                    <br />
                    <br />
                    ■ 회원 탈퇴 시의 아래 사항을 숙지하여 주시기 바랍니다.
                    <br />
                    <br />
                    1.회원 탈퇴 시 회원님의 정보는 상품 반품 및 A/S를 위해 전자상거래 등에서의 소비자 보호에 관한 법률에
                    의거한
                  </div>
                  <div className={`mt-[12px] space-y-[9px]`}>
                    <CheckBox1 size={`Sm`}>
                      회원탈퇴 안내를 모두 확인하였으며 탈퇴에 동의합니다.
                      <span className={`ml-[4px] font-[600] text-[var(--color2)]`}>(필수)</span>
                    </CheckBox1>
                    <CheckBox1 size={`Sm`}>
                      고객님의 쿠폰 및 포인트 자동 소멸에 동의합니다.
                      <span className={`ml-[4px] font-[600] text-[var(--color2)]`}>(필수)</span>
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

export default FormTable18;
