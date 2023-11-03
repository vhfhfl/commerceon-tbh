import CheckBox1 from '@/components/form/CheckBox1';
import {Layer} from '@/scripts/util';
import {Fragment} from 'react';

function LayerMemberUnify2() {
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
    <div className={`LayerMemberUnify2 w-[330px] bg-white`}>
      <div className={`p-[15px]`}>
        <div className={`text-[22px] font-[400] leading-[27px] text-[var(--color1)]`}>
          <span className={`font-[600]`}>TBH</span> <span>SHOP</span>
          <br />
          <span className={`font-[600]`}>회원통합안내</span>
        </div>
        <div className={`mt-[28px] text-[14px] font-[400] leading-[20px] text-[var(--color5)]`}>
          (이름)고객님,
          <br />
          고객님의 정보로 가입된 계정은
          <br />총 <span className={`text-[var(--color1)]`}>3개</span>로 확인되었습니다.
        </div>
        <div className={`mt-[6px]`}>
          <ul
            className={`grid min-h-[38px] grid-cols-[60px_1fr_70px] items-center justify-center border border-[var(--color3)] py-[13px] px-[15px] text-center text-[10px] font-[400] text-[var(--color1)]`}>
            <li>가입구분</li>
            <li>아이디</li>
            <li>가입일자</li>
          </ul>
          <div
            className={`border border-t-0 border-[var(--color3)] pt-[15px] pb-[18px] text-center text-[10px] font-[400] text-[var(--color1)]`}>
            {account_list.map((obj, idx) => {
              const { join_type, email_id, join_date } = obj;
              return (
                <Fragment key={idx}>
                  <ul className={`grid grid-cols-[60px_1fr_70px] items-center justify-center px-[15px] py-[6px]`}>
                    <li>{join_type}</li>
                    <li>{email_id}</li>
                    <li>{join_date}</li>
                  </ul>
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className={`mt-[18px]`}>
          <div className={`text-[14px] font-[400] leading-[19px] text-[var(--color1)]`}>
            가입된 계정의 통합진행이 필요합니다.
            <br />
            계정을 통합하시면,
          </div>
          <div className={`mt-[7px] space-y-[1px]`}>
            {help_desc_data.map((obj, idx) => {
              const { num, desc } = obj;
              return (
                <Fragment key={idx}>
                  <div
                    className={`flex min-h-[50px] flex-row items-center justify-start bg-[var(--color7)] py-[18px] px-[15px]`}>
                    <div className={`text-[12px] font-[600] text-[var(--color1)]`}>{num}</div>
                    <div className={`ml-[12px] text-[10px] font-[400] leading-[14px] text-[var(--color1)]`}>{desc}</div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className={`mt-[17px] text-center`}>
            <CheckBox1 size={'Sm'}>
              <div className={`font-[600]`}>회원 통합진행에 동의하여, 통합을 진행합니다.</div>
            </CheckBox1>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-[0]`}>
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

export default LayerMemberUnify2;
