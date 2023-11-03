import LayoutBasic from '@/layouts/LayoutBasic';
import MyPageAside2 from '@/modules/MyPageAside2';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';
import Paging1 from '@/modules/Paging1';

function PageNoticeBoard() {
  return (
    <div className={`PageNoticeBoard`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside2 />
          </div>
          <div>
            <section data-seq={`20230717132018542`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>공지사항</div>
                <div className={`Txt2`}>TBH SHOP 고객님들께 안내드립니다.</div>
              </div>
              <div className={`border-t-[3px] border-t-[var(--color1)]`}>
                {Array.from(Array(3)).map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <button
                        className={`grid w-full grid-cols-[140px_1fr] items-start gap-[0] border-b-[1px] border-solid border-b-[var(--color6)] py-[23px] text-left`}>
                        <div className={`Montserrat text-center font-[700]`}>{idx + 1}</div>
                        <div>
                          <div className={`Q`}>
                            구매하려는 제품의 색상과 사이즈 <strong className={`font-[700] text-[var(--color2)]`}>교환</strong>이 되지 않습니다.
                          </div>
                          <div className={`${idx == 0 && `On`} A mt-[36px] hidden leading-[20px] [&.On]:block`}>
                            <span className={`text-[#888]`}>배송 상황에 따라 배송 완료로 확인될 수 있습니다.</span>
                            <br />
                            <span className={`text-[#888]`}>아래 내용을 확인해주세요.</span> <br />
                            <br />
                            <span className={`font-[600] text-[#161616]`}>
                              [배송 기사가 상품을 아직 보유하고 있는 경우]
                            </span>
                            <br />
                            <span className={`text-[#888]`}>보유 여부는 택배사 또는 배송기사분에게 확인해주세요.</span>
                            <br />
                            <br />
                            <span className={`font-[600] text-[#161616]`}>
                              [경비실, 문앞, 택배 보관함 등 위탁 장소에 배송하는 경우]
                            </span>
                            <br />
                            <span className={`text-[#888]`}>다시 한 번 상품이 있는지 확인해주세요.</span> <br />
                            <br />
                            <span className={`font-[600] text-[#161616]`}>[송장 번호가 잘못된 경우]</span>
                            <br />
                            <span className={`text-[#888]`}>
                              1:1문의를 통해 주문번호, 상품에 대한 정보를 남겨주세요.
                            </span>
                            <br />
                          </div>
                        </div>
                      </button>
                    </Fragment>
                  );
                })}
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageNoticeBoard.Layout = LayoutBasic;
export default PageNoticeBoard;
