import LayoutSub from '@/layouts/LayoutSub';
import Paging1 from '@/modules/Paging1';

function PageMyPage19() {
  return (
    <div className={`PageMyPage19`}>
      <section data-seq={`20230814085021`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <article className={`grid grid-cols-[1fr_79px] items-center gap-[7px]`}>
              <div className={`InputUi InputSm`} data-form-hei={`Md`}>
                <input type={`text`} />
              </div>
              <button className={`ButtonStyle2 ButtonMd Round`}>검색</button>
            </article>
          </div>
        </div>
      </section>
      <section data-seq={`20230814105609`} className={`mt-[28px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <ul
              className={`divide-y-[1px] divide-solid divide-[var(--color6)] border-y-[1px] border-solid border-y-[var(--color6)]`}>
              <li className={`py-[14px]`}>
                <article className={`grid grid-cols-[1fr_79px] items-center justify-center gap-0`}>
                  <div>
                    <div className={`CenterLeft`}>
                      <div className={`text-[14px] font-[600] text-[var(--color1)]`}>
                        [회원/정보관리] 생*을 바*주*요
                      </div>
                      <div className={`ml-[15px]`}>
                        <img className={`Icon`} src={`/icons/icon_79.svg`} alt={``} />
                      </div>
                    </div>
                    <div className={`mt-[12px] text-[12px] font-[400] text-[var(--color5)]`}>
                      2023-01-06 16:04 홍*동
                    </div>
                  </div>
                  <span className={`ButtonStyle1 ButtonMd`}>접수</span>
                </article>
              </li>
              <li className={`py-[9px]`}>
                <article className={`grid grid-cols-[1fr_79px] items-center justify-center gap-0`}>
                  <div>
                    <div className={`CenterLeft`}>
                      <div className={`text-[14px] font-[600] text-[var(--color1)]`}>
                        [회원/정보관리] 생일을 바꿔주세요
                      </div>
                    </div>
                    <div className={`mt-[12px] text-[12px] font-[400] text-[var(--color5)]`}>2023-01-06 16:04</div>
                  </div>
                  <span className={`ButtonStyle2 ButtonMd`}>답변완료</span>
                </article>
                <div className={`mt-[10px] text-right text-[12px] font-[400] text-[var(--color5)]`}>
                  2023-01-06 16:04
                </div>
              </li>
            </ul>
            <div className={`mt-[30px]`}>
              <button className={`ButtonStyle1 ButtonLg w-[124px]`}>1:1 문의하기</button>
            </div>
            <div className={`mt-[60px]`}>
              <Paging1 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage19.Layout = LayoutSub;
export default PageMyPage19;
