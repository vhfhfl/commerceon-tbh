import LayoutSub from '@/layouts/LayoutSub';
import InfoTable1 from '@/modules/InfoTable1';
import InfoTable2 from '@/modules/InfoTable2';
import InfoTable3 from '@/modules/InfoTable3';
import MemberGrade2 from '@/modules/MemberGrade2';
import MemberGradeIcon from '@/modules/MemberGradeIcon';
import PaymentTable2 from '@/modules/PaymentTable2';
import PaymentTable3 from '@/modules/PaymentTable3';
import ProductItem13 from '@/modules/ProductItem13';

function PageMyPage4() {
  return (
    <div className={`PageMyPage4`}>
      <section data-seq={`20230807141210`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div>
              <MemberGrade2 />
            </div>
            <div className={`mt-[40px]`}>
              <MemberGradeIcon />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807141230`} className={`mt-[40px]`}>
        <article className={`grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] items-center justify-center gap-0`}>
          <a
            className={`border-r-[1px] border-r-white bg-[var(--color15)] px-[20px] pt-[17px] pb-[20px]`}
            href='https://www.google.com'
            target='_blank'>
            <div className={`text-[12px] font-[600] text-white`}>쿠폰</div>
            <article className={`CenterLeft mt-[10px]`}>
              <div
                className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                2
              </div>
              <div className={`ml-[3px] text-[14px] font-[600] text-white`}>장</div>
            </article>
          </a>
          <a
            className={`bg-[var(--color15)] px-[20px] pt-[17px] pb-[20px]`}
            href='https://www.google.com'
            target='_blank'>
            <div className={`text-[12px] font-[600] text-white`}>마일리지</div>
            <article className={`CenterLeft mt-[10px]`}>
              <div
                className={`Montserrat border-b-2 border-solid border-b-[var(--color2)] text-[24px] font-[400] text-[var(--color2)]`}>
                0
              </div>
              <div className={`ml-[3px] text-[14px] font-[600] text-white`}>원</div>
            </article>
          </a>
        </article>
      </section>
      <section data-seq={`20230807141237`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>2023-06-05 (총 7건)</div>
            </div>
            <div className={`border-t-2 border-solid border-t-[var(--color1)]`}>
              <div className={`mt-[14px]`}>
                <article
                  className={`flex flex-row items-start gap-0 bg-[var(--color7)] p-[14px] text-[14px] font-[400] leading-[23px] text-[var(--color2)]`}>
                  <div>
                    <img className={`Icon`} src={`/icons/icon_51.svg`} alt={``} />
                  </div>
                  <div className={`ml-[4px]`}>
                    총 1개의 상품 중, 1개의 상품을 발송했습니다.
                    <br />
                    1개의 박스로 배송됩니다.
                  </div>
                </article>
              </div>
              <div className={`mt-[18px] space-y-[52px]`}>
                <div>
                  <article className={`CenterBetween text-[var(--color1)]`}>
                    <div>
                      <div className={`text-[14px] font-[600]`}>주문번호 230401920301</div>
                      <div className={`mt-[7px] text-[12px] font-[400]`}>판매자 : 주식회사티비에이치글로벌</div>
                    </div>
                    <button className={`ButtonStyle1 ButtonSm`}>1:1 문의하기</button>
                  </article>
                  <div className={`mt-[12px]`}>
                    <ProductItem13 />
                  </div>
                </div>
              </div>
              <div className={`mt-[14px] text-[12px] font-[400] leading-[20px] text-[var(--color1)]`}>
                <div>
                  1) 교환/반품 요청은 배송완료일 기준으로 1주일내에만 가능합니다. 취소/교환/반품에 대한 자세한 문의는
                  고객센터 '1:1' 문의하시면 정성껏 답변해 드리겠습니다.
                </div>
                <div className={`mt-[9px]`}>
                  2) 교환,반품 시 상품은 1개의 포장으로 부탁드리며, 개별 반품시 비용이 발생할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807150301`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`relative`}>
              <div className={`Title-3`}>
                <div className={`Txt1`}>주문자 정보</div>
              </div>
                <div className={`absolute bottom-0 right-0 z-10 mb-[6px]`}>
                  <button className={`ButtonStyle1 ButtonSm`}>배송지 변경</button>
                </div>

            </div>
            <div>
              <InfoTable1 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807151727`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>배송지 정보</div>
            </div>
            <div>
              <InfoTable2 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807151848`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>결제정보</div>
            </div>
            <div>
              <PaymentTable2 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807162739`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>환불정보</div>
            </div>
            <div>
              <PaymentTable3 />
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230807162743`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-3`}>
              <div className={`Txt1`}>신청사유</div>
            </div>
            <div>
              <InfoTable3 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage4.Layout = LayoutSub;
export default PageMyPage4;
