import LayoutBasic from '@/layouts/LayoutBasic';
import Desc1 from '@/modules/Desc1';
import GradeBox2 from '@/modules/GradeBox2';
import InfoTable1 from '@/modules/InfoTable1';
import InfoTable2 from '@/modules/InfoTable2';
import InfoTable4 from '@/modules/InfoTable4';
import InfoTable6 from '@/modules/InfoTable6';
import MyPageAside from '@/modules/MyPageAside';
import PriceTable1 from '@/modules/PriceTable1';
import PriceTable2 from '@/modules/PriceTable2';
import ProductTable1 from '@/modules/ProductTable1';

function PageMyPage4() {
  return (
    <div className={`PageMyPage4`}>
      <div className={`SubContainer mt-[120px]`}>
        <div className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div data-seq='20230620164534434'>
            <MyPageAside />
          </div>
          <div data-seq='20230620164538119'>
            <section className={`relative flex flex-row items-center justify-between gap-[0]`}>
              <div>
                <div className={`text-[28px] font-[600] text-[var(--color1)]`}>
                  홍길동님의 05월 회원 등급은 <span className={`text-[#B82C4E]`}>STAR</span>입니다.
                </div>
              </div>
              <div>
                <div>
                  <button
                    className={`ButtonMd ButtonStyle4`}
                    onClick={(evt) => {
                      const el = document.querySelector(`#GradeLayer-ade543249411`);
                      el.classList.toggle('On');
                    }}>
                    등급혜택보기
                  </button>
                  <div
                    id={`GradeLayer-ade543249411`}
                    className={`absolute top-[51px] right-0 z-10 hidden bg-white [&.On]:block`}
                    style={{ filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))' }}>
                    <div className={`w-[320px] p-[20px]`}>
                      <div className={`text-[18px] font-[600] text-[var(--color1)]`}>등급 혜택 안내</div>
                      <div className={`mt-[28px]`}>
                        <InfoTable6 />
                      </div>
                    </div>
                    <div className={`mt-[20px]`}>
                      <button className={`PopupButton2 w-full`}>닫기</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox2 />
            </section>
            <section data-seq={`20230621133015753`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>
                      주문/배송상세 <span className={`Montserrat ml-[12px] font-[600]`}>2305181545000344</span>
                    </div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <div className={`Montserrat text-[14px] font-[500] text-[#888]`}>2023/05/18</div>
                  <button className={`ButtonLg ButtonStyle4 ml-[25px] w-[130px]`}>1:1 문의하기</button>
                </article>
              </article>
              <div>
                <article className={`inline-flex flex-row items-center gap-[9px] bg-[#f5f5f5] px-[18px] py-[13px]`}>
                  <img src={`/icons/zco_60.svg`} alt={``} />
                  <div className={`text-[14px] font-[400] text-[#68f]`}>
                    총 1개의 상품 중, 1개의 상품을 발송했습니다. 1개의 박스로 배송됩니다.
                  </div>
                </article>
              </div>
              <div className={`mt-[16px]`}>
                <ProductTable1 />
              </div>
              <article className={`mt-[25px] flex flex-row items-center justify-center gap-[16px]`}>
                <button className={`Button9-2 w-[140px]`}>구매확정</button>
                <button className={`Button9-1 w-[140px]`}>취소/환불신청</button>
                <button className={`Button9-1 w-[140px]`}>반품신청</button>
                <button className={`Button9-1 w-[140px]`}>교환신청</button>
              </article>
              <div className={`mt-[25px] border-t-[1px] border-solid border-t-[var(--color6)] pt-[25px]`}>
                <Desc1 />
              </div>
            </section>
            <section data-seq={`20230704082331366`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>주문자 정보</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
                <article className={`flex flex-row items-center gap-[0]`}>
                  <button className={`ButtonMd ButtonStyle4 ml-[25px] w-[105px]`}>배송지 변경</button>
                </article>
              </article>
              <div>
                <InfoTable1 />
              </div>
            </section>
            <section data-seq={`20230704082331366`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>배송지 정보</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <InfoTable4 />
              </div>
            </section>
            <section data-seq={`20230704082331366`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>결제정보</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <PriceTable1 />
              </div>
            </section>
            <section data-seq={`20230704082331366`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>환불정보</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <PriceTable2 />
              </div>
            </section>
            <section data-seq={`20230704082331366`} className={`mt-[60px]`}>
              <article className={`mb-[8px] flex flex-row items-center justify-between gap-[0]`}>
                <div>
                  <div className={`Title-2`}>
                    <div className={`Txt1`}>신청 사유</div>
                    {/*<div className={`Txt2`}>홍길동님께서 본 최근 상품입니다</div>*/}
                  </div>
                </div>
              </article>
              <div>
                <InfoTable2 />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage4.Layout = LayoutBasic;
export default PageMyPage4;
