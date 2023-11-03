import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';

function PageMyPage27() {
  return (
    <div className={`PageMyPage27`}>
      <section data-seq={`20230816111102`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`text-center text-[var(--color1)]`}>
              <div className={`text-[16px] font-[700]`}>비밀번호 확인</div>
              <div className={`mt-[15px]`}>
                <div className={`text-[14px] font-[400] leading-[18px]`}>
                  회원님의 정보를 안전하게 보호가기 위해
                  <br />
                  비밀번호를 다시 입력해주세요
                </div>
              </div>
            </div>
            <div className={`mt-[22px]`}>
              <article className={`grid grid-cols-[1fr_65px] items-center justify-center gap-[7px]`}>
                <div className={`InputUi InputSm w-full`} data-form-hei={`Md`}>
                  <input type={`text`} />
                  <button>
                    <img className={`Icon !w-[24px]`} src={`/icons/zco_11_1.svg`} alt={``} />
                  </button>
                </div>
                <button className={`ButtonStyle2 ButtonMd Round`}>확인</button>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230816111911`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`border-t-[1px] border-solid border-t-[var(--color6)]`}>
              <div className={`mt-[40px] text-center text-[14px] font-[600] text-[var(--color1)]`}>
                SNS 간편 로그인(가입)고객
              </div>
              <div className={`mt-[40px]`}>
                <ul className={`flex flex-row items-center justify-center gap-[18px]`}>
                  {['페이코', '카카오', '네이버', '애플'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <li>
                          <button>
                            <img className={`Icon`} src={`/icons/icon_81_${idx + 1}.svg`} alt={``} />
                          </button>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
              <div className={`mt-[37px]`}>
                <button className={`ButtonStyle2 ButtonXl w-full`}>인증하기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage27.Layout = LayoutSub;
export default PageMyPage27;
