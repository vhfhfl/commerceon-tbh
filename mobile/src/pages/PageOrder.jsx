import LayoutSub2 from '@/layouts/LayoutSub2';
import { Fragment } from 'react';
import { Util } from '@/scripts/util';
import ProductItem5 from '@/modules/ProductItem5';
import ProductItem6 from '@/modules/ProductItem6';
import TabBtnBox from '@/components/common/TabBtnBox';
import TabChildBox from '@/components/common/TabChildBox';
import FormTable1 from '@/modules/FormTable1';
import FormTable2 from '@/modules/FormTable2';
import FormTable3 from '@/modules/FormTable3';
import FormTable4 from '@/modules/FormTable4';
import PaymentTable1 from '@/modules/PaymentTable1';
import CheckBox1 from '@/components/form/CheckBox1';

function PageOrder(props) {
  return (
    <>
      <div className={`PageOrder`}>
        <section data-seq={`20230702172241445`} className={`mt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <article className={`flex flex-row items-center gap-0 text-[14px] font-[700] text-[var(--color1)]`}>
                <div>주문 상품</div>
                <div className={`mx-[14px] h-[14px] w-[1px] bg-[var(--color3)] text-[0px]`}>Bar</div>
                <div>3개</div>
                <div className={`ml-[8px]`}>39,900원</div>
              </article>
              <div className={`mt-[10px] border-t-2 border-t-[var(--color1)]`}>
                <div className={``}>
                  {Array.from(Array(2)).map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <ProductItem5 idx={idx} />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className={`mt-[10px] mb-[20px]`}>
                <div
                  className={`SelectBox1 w-full`}
                  data-form-hei={`Lg`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>쿠폰 선택</div>
                  </button>
                  <div className={`Options`}>
                    <button>쿠폰 선택</button>
                    <button>쿠폰 선택</button>
                    <button>쿠폰 선택</button>
                  </div>
                </div>
                <div
                  className={`SelectBox1 mt-[10px] w-full`}
                  data-form-hei={`Lg`}
                  onClick={(evt) => {
                    const target = evt.target.closest('.SelectBox1');
                    Util.toggleClass(target, 'On');
                  }}>
                  <button>
                    <div>주말특가 중복할인 5%</div>
                  </button>
                  <div className={`Options`}>
                    <button>주말특가 중복할인 5%</button>
                    <button>주말특가 중복할인 5%</button>
                    <button>주말특가 중복할인 5%</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230711092506186`} className={`mt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div className={`border-t-[1px] border-t-[var(--color6)]`}>
                <div className={`mt-[40px]`}>
                  <article
                    className={`flex flex-row items-start gap-[4px] text-[14px] font-[700] text-[var(--color1)]`}>
                    사은품 선택 ( <span className={`text-[var(--color2)]`}>총 4개 선택 가능</span> : 무료
                    <span className={`text-[var(--color2)]`}>3개</span> / 유료
                    <span className={`text-[var(--color2)]`}>1개</span> )
                  </article>
                </div>
                <div className={`mt-[10px] border-t-2 border-t-[var(--color1)]`}>
                  <article className={`mt-[20px] grid grid-cols-[auto_1fr] items-start gap-[4px]`}>
                    <div>
                      <img className={`Icon`} src={`/icons/icon_51.svg`} alt={``} />
                    </div>
                    <div className={`text-[14px] font-[400] leading-[24px] text-[var(--color5)]`}>
                      주문하시는 상품의 브랜드, 이벤트 등에 따라 지급되는 사은품이 달라집니다.
                    </div>
                  </article>
                </div>
              </div>
              <div className={`mt-[40px]`}>
                <div className={`text-[14px] font-[700] text-[var(--color1)]`}>무료 사은품 선택</div>
                <div className={`mt-[20px]`}>
                  <TabBtnBox theme={`6`} uuid={`5a1b6900-70ae-4c82-b029-0cc70850a007`}>
                    <button className={`On`}>봄꽃맞이</button>
                    <button>장마철</button>
                    <button>추수감사절</button>
                  </TabBtnBox>
                  <TabChildBox
                    className={`border border-[var(--color6)]`}
                    uuid={`5a1b6900-70ae-4c82-b029-0cc70850a007`}>
                    <div className={`On p-[20px_6px]`}>
                      <article className={`grid grid-cols-[repeat(3,auto)] items-center gap-[12px_4px]`}>
                        <div
                          className={`On mx-auto w-[100px] rounded-[4px] border-[1px] border-transparent p-[8px] [&.On]:border-[var(--color1)]`}>
                          <div>
                            <img
                              className={`aspect-[84/112]`}
                              src={`https://picsum.photos/84/112.jpg?random`}
                              alt={``}
                            />
                          </div>
                          <div className={`mt-[8px]`}>
                            <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>JUCY JUDY</div>
                            <div className={`mt-[4px] truncate text-[10px] font-[400] text-[var(--color1)]`}>
                              JJ로고 배색 양말 블루 최대 1줄
                            </div>
                          </div>
                        </div>
                        {Array.from(Array(5)).map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <div
                                className={`mx-auto w-[100px] rounded-[4px] border-[1px] border-transparent p-[8px] [&.On]:border-[var(--color1)]`}>
                                <div>
                                  <img
                                    className={`aspect-[84/112]`}
                                    src={`https://picsum.photos/84/112.jpg?random`}
                                    alt={``}
                                  />
                                </div>
                                <div className={`mt-[8px]`}>
                                  <div className={`Montserrat text-[10px] font-[600] text-[var(--color1)]`}>
                                    JUCY JUDY
                                  </div>
                                  <div className={`mt-[4px] truncate text-[10px] font-[400] text-[var(--color1)]`}>
                                    JJ로고 배색 양말 블루 최대 1줄
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </article>
                    </div>
                  </TabChildBox>
                </div>
              </div>
              <div className={`mt-[20px]`}>
                <button className={`ButtonLg ButtonStyle1 Round w-full`}>옵션 / 수량 선택</button>
              </div>
              <div className={`mt-[40px]`}>
                <article className={`flex flex-row items-start gap-[4px] text-[14px] font-[700] text-[var(--color1)]`}>
                  선택한 무료 사은품 ( <span className={`text-[var(--color2)]`}>총 3개</span> )
                </article>
                <div className={`mt-[20px]`}>
                  <ProductItem6 />
                </div>
              </div>
              <div className={`mt-[40px] border-t-[1px] border-t-[var(--color6)]`}>
                <div className={`pt-[20px] text-[14px] font-[700] text-[var(--color1)]`}>유료 사은품 선택</div>
                <div className={`mt-[10px]`}>
                  <TabBtnBox theme={`6`} uuid={`74d3a1e6-c506-4507-9e67-b15f1e30e6dd`}>
                    <button className={`On`}>봄꽃맞이</button>
                    <button>장마철</button>
                    <button>추수감사절</button>
                  </TabBtnBox>
                  <TabChildBox
                    className={`border border-[var(--color6)]`}
                    uuid={`74d3a1e6-c506-4507-9e67-b15f1e30e6dd`}>
                    <div className={`On p-[20px_6px]`}>
                      <article className={`grid grid-cols-[repeat(3,auto)] items-center gap-[12px_4px]`}>
                        <div
                          className={`On mx-auto w-[100px] rounded-[4px] border-[1px] border-transparent p-[8px] [&.On]:border-[var(--color1)]`}>
                          <div>
                            <img
                              className={`aspect-[84/112]`}
                              src={`https://picsum.photos/84/112.jpg?random`}
                              alt={``}
                            />
                          </div>
                          <div className={`mt-[8px] text-[10px] text-[var(--color1)]`}>
                            <div className={`truncate font-[400]`}>남성 캐주얼 벨트 최대 1줄</div>
                            <div className={`Montserrat mt-[4px] font-[600]`}>10,000원</div>
                          </div>
                        </div>
                        {Array.from(Array(5)).map((obj, idx) => {
                          return (
                            <Fragment key={idx}>
                              <div className={`mx-auto w-[100px] rounded-[4px] p-[8px]`}>
                                <div>
                                  <img
                                    className={`aspect-[84/112]`}
                                    src={`https://picsum.photos/84/112.jpg?random`}
                                    alt={``}
                                  />
                                </div>
                                <div className={`mt-[8px] text-[10px] text-[var(--color1)]`}>
                                  <div className={`truncate font-[400]`}>남성 캐주얼 벨트 최대 1줄</div>
                                  <div className={`Montserrat mt-[4px] font-[600]`}>10,000원</div>
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </article>
                    </div>
                  </TabChildBox>
                </div>
              </div>
              <div className={`mt-[20px]`}>
                <button className={`ButtonLg ButtonStyle1 Round w-full`}>옵션 / 수량 선택</button>
              </div>
              <div className={`mt-[40px]`}>
                <article
                  className={`flex h-[30px] flex-row items-start gap-[4px] text-[14px] font-[700] text-[var(--color1)]`}>
                  선택한 유료 사은품 ( <span className={`text-[var(--color2)]`}>총 3개</span> )
                </article>
                <div>
                  <ProductItem6 />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230713141257394`} className={`mt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <article
                className={`grid grid-cols-[1fr_20px] items-center justify-between gap-0 border-t-[1px] border-t-[var(--color6)] pt-[40px] text-[var(--color1)]`}>
                <div className={`Title-fc63826d`}>주문자 정보</div>
                <button>
                  <img
                    className={`Icon duration-300 ease-out [.On_>_&]:rotate-180`}
                    src={`/icons/icon_52.svg`}
                    alt={``}
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      Util.toggleClass(target, 'On');

                      const el = document.querySelector(`#CustomerTable`);
                      el.classList.toggle('On');
                    }}
                  />
                </button>
              </article>
              <div id={`CustomerTable`} className={`duration-300 ease-out [&.On]:hidden`}>
                <FormTable1 />
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230713141305928`} className={`mt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <article
                className={`grid grid-cols-[1fr_20px] items-center justify-between gap-0 text-[var(--color1)]`}>
                <div className={`Title-fc63826d`}>배송지 정보</div>
                <button>
                  <img
                    className={`Icon duration-300 ease-out [.On_>_&]:rotate-180`}
                    src={`/icons/icon_52.svg`}
                    alt={``}
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      Util.toggleClass(target, 'On');

                      const el = document.querySelector(`#DeliveryTable`);
                      el.classList.toggle('On');
                    }}
                  />
                </button>
              </article>
              <div id={`DeliveryTable`} className={`duration-300 ease-out [&.On]:hidden`}>
                <FormTable2 />
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230713142352291`} className={`mt-[20px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <article
                className={`grid grid-cols-[1fr_20px] items-center justify-between gap-0 text-[var(--color1)]`}>
                <div className={`flex flex-row items-center gap-0 text-[14px] font-[700]`}>
                  <div className={`Title-fc63826d`}>할인 혜택</div>
                  <div className={`Montserrat ml-[12px] flex flex-row items-center`}>
                    <div className={`Montserrat text-[var(--color2)]`}>39,900원</div>
                    <div className={`ml-[4px]`}>할인</div>
                  </div>
                </div>
                <button>
                  <img
                    className={`Icon duration-300 ease-out [.On_>_&]:rotate-180`}
                    src={`/icons/icon_52.svg`}
                    alt={``}
                    onClick={(evt) => {
                      const target = evt.target.closest('button');
                      Util.toggleClass(target, 'On');

                      const el = document.querySelector(`#BenefitsTable`);
                      el.classList.toggle('On');
                    }}
                  />
                </button>
              </article>
              <div id={`BenefitsTable`} className={`duration-300 ease-out [&.On]:hidden`}>
                <FormTable3 />
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230713142352291`} className={`mt-[40px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <div>
                <PaymentTable1 />
              </div>
            </div>
          </div>
        </section>
        <section data-seq={`20230626102029587`} className={`mt-[40px]`}>
          <div className={`H-Box`}>
            <div className={`Inner`}>
              <article className={`flex flex-row items-center justify-between gap-0`}>
                <div className={`Title-fc63826d`}>결제수단 선택</div>
                <CheckBox1 size={'Sm'}>다음에도 이 결제수단 사용하기</CheckBox1>
              </article>
              <div>
                <FormTable4 />
              </div>
              <div className={`mt-[40px]`}>
                <button className={`ButtonXl ButtonStyle2 w-full`}>결제하기</button>
              </div>
            </div>
          </div>
        </section>
        <div className={`fixed bottom-0 left-0 z-[999] w-full shadow-[0_-10px_20px_0px_rgba(0_0_0/0.1)]`}>
          <div className={`grid grid-cols-2 items-center justify-between bg-white p-[9px_20px]`}>
            <div className={`Montserrat text-[var(--color1)]`}>
              <div className={`text-[12px] font-[400]`}>총 금액</div>
              <div className={`mt-[6px] text-[18px] font-[700]`}>42,400원</div>
            </div>
            <button className={`ButtonXl ButtonStyle2 Round w-full`}>주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

PageOrder.Layout = LayoutSub2;
export default PageOrder;
