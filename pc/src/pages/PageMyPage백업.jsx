import LayoutBasic from '@/layouts/LayoutBasic';
import DateFilter1 from '@/modules/DateFilter1';
import Desc1 from '@/modules/Desc1';
import FormTable9 from '@/modules/FormTable9';
import GradeBox2 from '@/modules/GradeBox2';
import GradeBox3 from '@/modules/GradeBox3';
import GradeBox4 from '@/modules/GradeBox4';
import InfoTable3 from '@/modules/InfoTable3';
import MyPageAside from '@/modules/MyPageAside';
import OrderTable2 from '@/modules/OrderTable2';
import Paging1 from '@/modules/Paging1';
import ProductItem6 from '@/modules/ProductItem6';
import ProductTable1 from '@/modules/ProductTable1';
import ProductTable2 from '@/modules/ProductTable2';
import ProductTable5 from '@/modules/ProductTable5';
import { Fragment } from 'react';

function PageMyPage3() {
  return (
    <div className={`PageMyPage3`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section className={`flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>
                  홍길동님의 05월 회원 등급은 <span className={`text-[#B82C4E]`}>STAR</span>입니다.
                </div>
              </div>
              <div>
                <button className={`ButtonMd ButtonStyle4`}>등급혜택보기</button>
              </div>
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox2 />
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox3 />
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox4 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[36px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>진행중인 주문</div>
                <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
              </div>
              <OrderTable2 />
            </section>
            <section data-seq={`20230621124610190`} className={`mt-[40px]`}>
              <DateFilter1 />
            </section>
            <section data-seq={`20230621133015753`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>주문/배송상세 2305181545000344</div>
                {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
              </div>
              <div>
                <ProductTable1 />
              </div>
              <div className={`mt-[20px]`}>
                <ProductTable5 />
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>최근 주문 정보</div>
                <div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>
              </div>
              <div className={``}>
                <ProductTable2 />
              </div>
              <article className={`mt-[40px] flex flex-row items-center justify-center gap-[5px]`}>
                <button className={`Button9-2 w-[140px]`}>구매확정</button>
                <button className={`Button9-1 w-[140px]`}>환불신청</button>
                <button className={`Button9-1 w-[140px]`}>반품신청</button>
                <button className={`Button9-1 w-[140px]`}>교환신청</button>
              </article>
              <div className={`mt-[25px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[25px]`}>
                <Desc1 />
              </div>
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[147px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>최근 본 상품</div>
                <div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>
              </div>
              <table className={`Table1 NoPadding mt-[20px]`}>
                <tbody>
                  <tr>
                    <td>
                      <div className={`grid grid-cols-4 items-center justify-center gap-[10px]`}>
                        {Array.from(Array(4)).map((obj4, idx4) => {
                          return (
                            <Fragment key={idx4}>
                              <ProductItem6 idx={idx4} />
                            </Fragment>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section data-seq={`20230704100819407`} className={`mt-[40px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>수거지 정보</div>
                    <div className={`Txt2`}>
                      상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비중부터는 환불
                      신청이 거부될 수 있습니다.
                    </div>
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <button className={`ButtonLg ButtonStyle2 ml-[25px] w-[134px]`}>배송지 목록</button>
                </article>
              </article>
              <div>
                <FormTable9 />
              </div>
            </section>
            <section data-seq={`20230704101026189`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>교환배송비 결제</div>
                    {/*<div className={`Txt2`}>*/}
                    {/*  상품이 준비되기 전인 결제 완료 상태에서만 환불 신청을 하실 수 있습니다. 상품 준비중부터는 환불*/}
                    {/*  신청이 거부될 수 있습니다.*/}
                    {/*</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <InfoTable3 />
              </div>
              <article className={`mt-[90px] flex flex-row items-center justify-center gap-[16px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[230px]`}>취소</button>
                <button className={`ButtonXl ButtonStyle2 w-[230px]`}>확인</button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage3.Layout = LayoutBasic;
export default PageMyPage3;
