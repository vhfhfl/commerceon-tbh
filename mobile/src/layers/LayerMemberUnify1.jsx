import CheckBox1 from '@/components/form/CheckBox1';
import { Layer } from '@/scripts/util';
import { Fragment } from 'react';

function LayerMemberUnify1() {
  const help_desc_data = [
    {
      num: '01',
      desc: '가입구분에 따른 각 채널별로 동일하게 로그인이 가능합니다.',
    },
    {
      num: '02',
      desc: '각 계정별로 나뉘어진 주문내역을 취합하여 확인할 수 있습니다.',
    },
    {
      num: '03',
      desc: '각 계정별로 나뉘어진 할인혜택을 통합하여 사용할 수 있습니다.',
    },
  ];

  const account_list = [
    {
      join_type: '네이버',
      email_id: 'tbhshop@naver.com',
      join_date: '2023.04.01',
    },
    {
      join_type: '카카오톡',
      email_id: 'tbhshop@kakao.com',
      join_date: '2023.04.02',
    },
    {
      join_type: '일반가입',
      email_id: 'tbhshop',
      join_date: '2023.04.03',
    },
  ];

  return (
    <div className={`LayerMemberUnify1 w-[330px] bg-white`}>
      <div className={`p-[15px]`}>
        <div className={`text-[22px] font-[400] leading-[27px] text-[var(--color1)]`}>
          <span className={`font-[600]`}>TBH</span>
          <span>SHOP</span>
          <br />
          <span className={`font-[600]`}>회원통합안내</span>
        </div>
        <div className={`mt-[30px] text-[14px] font-[400] leading-[20px] text-[var(--color5)]`}>
          (이름)고객님,
          <br />
          고객님의 정보로 가입된 계정은
          <br />총 <span className={`text-[var(--color1)]`}>3개</span>로 확인되었습니다.
        </div>
        <div className={`mt-[10px]`}>
          <table
            className={`w-full border border-[var(--color6)] text-center text-[10px] font-[400] text-[var(--color1)] `}>
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
        <div className={`mt-[20px]`}>
          <div className={`text-[14px] font-[400] leading-[19px] text-[var(--color1)]`}>
            가입된 계정의 통합진행이 필요합니다.
            <br />
            계정을 통합하시면,
          </div>
          <div className={`mt-[10px] space-y-[1px]`}>
            {help_desc_data.map((obj, idx) => {
              const { num, desc } = obj;
              return (
                <Fragment key={idx}>
                  <div
                    className={`flex min-h-[50px] flex-row items-center justify-start bg-[var(--color7)] py-[18px] px-[15px]`}>
                    <div className={`text-[12px] font-[600] text-[var(--color1)]`}>{num}</div>
                    <div className={`ml-[10px] text-[10px] font-[400] leading-[14px] text-[var(--color1)]`}>{desc}</div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className={`mt-[20px] text-center`}>
            <CheckBox1 size={'Sm'}>
              <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
            </CheckBox1>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
        <button
          className={`PopupButton1`}
          >
          다음에 통합하기
        </button>
        <button className={`PopupButton2`}>회원 통합하기</button>
      </div>
    </div>
  );
}

export default LayerMemberUnify1;
