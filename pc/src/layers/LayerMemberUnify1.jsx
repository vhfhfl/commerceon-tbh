import CheckBox1 from '@/components/form/CheckBox1';

function LayerMemberUnify1() {
  return (
    <div className={`LayerMemberUnify1 w-[623px] bg-white`}>
      <div className={`p-[30px]`}>
        <div className={`text-[28px] font-[400] leading-[30px] text-[var(--color1)]`}>
          <span className={`font-[700]`}>TBH</span> SHOP
          <br />
          <span className={`font-[700]`}>회원통합안내</span>
        </div>
        <div className={`mt-[40px] text-[20px] font-[500] leading-[26px] text-[var(--color5)]`}>
          (이름)고객님,
          <br />
          고객님의 정보로 가입된 계정은 총 <span className={`text-[var(--color1)]`}>3개</span>로 확인되었습니다.
        </div>
        <div className={`mt-[10px]`}>
          <table
            className={`w-full border border-[var(--color6)] text-center text-[14px] font-[400] text-[var(--color1)]`}>
            <thead>
              <tr className={`divide-x divide-[var(--color6)] border border-[var(--color6)]`}>
                <th className={`py-[18px]`}>선택</th>
                <th className={`py-[18px]`}>일반아이디</th>
                <th className={`py-[18px]`}>SNS 연결(가입) 아이디</th>
                <th className={`py-[18px]`}>가입일자</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`divide-x divide-[var(--color6)] border border-[var(--color6)]`}>
                <td className={`py-[18px]`}>
                  <CheckBox1 size={'Sm'} />
                </td>
                <td className={`py-[18px] leading-[20px]`}>gilding123</td>
                <td className={`py-[18px] leading-[20px]`}>tbhshop@naver.com</td>
                <td className={`py-[18px] leading-[20px]`}>2023.04.20</td>
              </tr>
              <tr className={`divide-x divide-[var(--color6)] border border-[var(--color6)]`}>
                <td className={`py-[18px]`}>
                  <CheckBox1 size={'Sm'} />
                </td>
                <td className={`py-[18px] leading-[20px]`}>gilding123</td>
                <td className={`py-[18px] leading-[20px]`}>
                  tbhshop@kakao.com
                  <br />
                  dsfs0293@kakao.com
                </td>
                <td className={`py-[18px] leading-[20px]`}>2023.04.20</td>
              </tr>
              <tr className={`divide-x divide-[var(--color6)] border border-[var(--color6)]`}>
                <td className={`py-[18px]`}>
                  <CheckBox1 size={'Sm'} />
                </td>
                <td className={`py-[18px] leading-[20px]`}></td>
                <td className={`py-[18px] leading-[20px]`}>tbhshop@facebook.com</td>
                <td className={`py-[18px] leading-[20px]`}>2023.04.20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`mt-[30px]`}>
          <div className={`text-[20px] font-[500] leading-[26px] text-[var(--color1)]`}>
            가입된 계정의 통합진행이 필요합니다.
            <br />
            계정을 통합하시면,
          </div>
          <div className={`mt-[20px] space-y-[12px] text-[14px] font-[400] text-[var(--color1)]`}>
            <div>
              1. 회원통합 후, 선택하신 계정&#40;일반아이디, SNS연결아이디&#41;으로 동일하게 로그인이 가능합니다.
            </div>
            <div>2. 각 계정별로 나뉘어진 주문내역, 할인혜택 등은 선택하신 계정으로 모두 통합됩니다.</div>
            <div>3. 선택하신 계정 외 다른 계정은 접속이 불가능 합니다.</div>
          </div>
          <div className={`mt-[30px] text-center`}>
            <CheckBox1 size={'Lg'}>
              <div className={`font-[600]`}>회원 통합 진행에 동의하여, 통합을 진행합니다.</div>
            </CheckBox1>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
        <button className={`PopupButton1`}>다음에 통합하기</button>
        <button className={`PopupButton2`}>회원 통합하기</button>
      </div>
    </div>
  );
}

export default LayerMemberUnify1;
