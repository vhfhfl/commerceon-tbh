import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import LayoutSub from '@/layouts/LayoutSub';
import { Fragment } from 'react';

function PageMyPage14() {
  return (
    <div className={`PageMyPage14`}>
      <section data-seq={`20230811141106`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>쿠폰내역</div>
              <div className={`text-[14px] font-[700] text-[var(--color2)]`}>(사용 가능한 쿠폰 3장)</div>
            </div>
            <div className={`mt-[14px]`}>
              <TabBtnBox theme={`6`} uuid={`3b77ca12-4705-416e-bc2d-388483746ed5`}>
                <button className={`On`}>사용가능</button>
                <button>사용불가</button>
                <button>쿠폰등록</button>
              </TabBtnBox>
              <TabChildBox
                uuid={`3b77ca12-4705-416e-bc2d-388483746ed5`}>
                <div className={`On`}>
                  <div className={`space-y-[10px]`}>
                    {Array.from(Array(2)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <div
                            className={`w-full border-[1px] border-solid border-[var(--color6)] p-[27px_18px]`}>
                            <div>
                              <div className={`text-[18px] font-[700] text-[var(--color1)]`}>
                                마인드브릿지 X 7드라이브인 1만원 쿠폰
                              </div>
                              <div className={`mt-[9px] text-[18px] font-[600] leading-[26px] text-[var(--color2)]`}>
                                정가 기준 34% 상품할인
                                <br />
                                (최대 10,000원 할인)
                              </div>
                              <div className={`mt-[12px] text-[12px] font-[400] text-[var(--color1)]`}>
                                주문금액이 50,000원 이상시 사용
                              </div>
                              <div className={`mt-[38px]`}>
                                <article className={`flex flex-row items-end justify-between gap-0`}>
                                  <div className={`text-[12px] font-[400] text-[var(--color5)]`}>
                                    <div>혜택구분 : 상품쿠폰</div>
                                    <div className={`mt-[13px]`}>사용범위 : 모바일전용</div>
                                  </div>
                                  <div>
                                    <button className={`ButtonStyle4 ButtonSm Round`}>자세히보기</button>
                                  </div>
                                </article>
                              </div>
                            </div>
                            <div className={`mt-[18px]`}>
                              <div
                                className={`border-t-[1px] border-solid border-t-[var(--color6)] pt-[14px] text-[12px] font-[400] text-[var(--color5)]`}>
                                <div>유효기간 : 2023.05.01 15:14 ~ 2023.05.19 15:14</div>
                                <div className={`mt-[13px]`}>발급일자 : 2023.05.01 15:14</div>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </TabChildBox>
              <div className={`mt-[30px]`}>
                <button className={`ButtonStyle1 ButtonLg Round w-full`}>더보기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage14.Layout = LayoutSub;
export default PageMyPage14;
