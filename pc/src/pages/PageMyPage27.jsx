import LayoutBasic from '@/layouts/LayoutBasic';
import MyPageAside from '@/modules/MyPageAside';
import {Fragment} from 'react';

function PageMyPage27() {
  return (
    <div className={`PageMyPage27`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside />
          </div>
          <div>
            <section data-seq={`20230710133111456`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>회원정보 변경</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
            </section>
            <section data-seq={`20230711112921232`} className={``}>
              <div className={`mx-auto mt-[92px] w-[550px] text-center`}>
                <div className={`text-[18px] font-[700] text-[var(--color1)]`}>비밀번호 확인</div>
                <div className={`mt-[20px] h-[3px] bg-[var(--color1)]`}></div>
                <div className={`mt-[48px] text-[18px] font-[500] text-[var(--color5)]`}>
                  회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 입력해주세요.
                </div>
                <article className={`CenterCenter mt-[47px]`}>
                  <div className='InputUi w-[270px]' data-form-hei='Lg'>
                    <input placeholder='현재 비밀번호' />
                    <button>
                      <img className={`!w-[24px]`} src='/icons/zco_40_1.svg' alt='' />
                    </button>
                  </div>
                  <button className={`ButtonLg ButtonStyle2 Round ml-[11px] w-[94px]`}>확인</button>
                </article>
                <div className={`mt-[56px] h-[1px] bg-[var(--color6)]`}></div>
                <div className={`mt-[40px] text-[18px] font-[500] text-[var(--color5)]`}>SNS간편 로그인 (가입)고객</div>
                <article className={`mt-[39px] grid grid-cols-2 items-center justify-center gap-[10px]`}>
                  {Array.from(Array(4)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`h-[45px] border-[1px] border-solid border-[var(--color6)] text-center`}>
                          <img className={`mx-auto`} src={`/icons/zco_85_${idx + 1}.svg`} alt={``} />
                        </button>
                      </Fragment>
                    );
                  })}
                </article>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage27.Layout = LayoutBasic;
export default PageMyPage27;
