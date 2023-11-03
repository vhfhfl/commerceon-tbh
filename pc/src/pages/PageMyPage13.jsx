import LayoutBasic from '@/layouts/LayoutBasic';
import GradeBox2 from '@/modules/GradeBox2';
import InfoTable6 from '@/modules/InfoTable6';
import MyPageAside from '@/modules/MyPageAside';
import Paging1 from '@/modules/Paging1';
import ProductTable13 from '@/modules/ProductTable13';
import { Fragment } from 'react';

function PageMyPage13() {
  return (
    <div className={`PageMyPage13`}>
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
            </section>
            <section data-seq={`20230620171252095`} className={`mt-[25px]`}>
              <GradeBox2 />
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>쿠폰 등록</div>
                {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
              </div>
              <div className={`mt-[30px] text-[16px] font-[400] text-[var(--color1)]`}>
                발급 받으신 쿠폰 인증 번호를 아래에 입력해주세요. (5자리~최대 12자리)
              </div>
              <article className={`mt-[25px] flex flex-row items-center gap-[10px]`}>
                <div>
                  <div className={`InputUi w-[389px] !border-[var(--color13)]`} data-form-hei='Lg'>
                    <input placeholder='InputUi' defaultValue={`123-456FGXAA`} />
                  </div>
                </div>
                <div>
                  <button className={`ButtonLg ButtonStyle2 Round`}>쿠폰 등록</button>
                </div>
              </article>
              <div className={`mt-[10px] text-[14px] font-[400] leading-[20px] text-[var(--color13)]`}>
                사용할 수 없는 쿠폰 번호입니다.
              </div>
            </section>
            <section data-seq={`20230621092117436`} className={`mt-[60px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>보유 쿠폰</div>
                {/*<div className={`Txt2`}>최근 30일 내에 진행중인 주문 정보입니다</div>*/}
              </div>
              <div>
                <div className={`TabUi2`}>
                  {['사용가능', '사용불가'].map((obj, idx) => {
                    return (
                      <Fragment key={idx}>
                        <button className={`${idx == 0 && `On`}`}>{obj}</button>
                      </Fragment>
                    );
                  })}
                </div>
                <div className={`py-[22px] text-[16px] font-[700] text-[var(--color1)]`}>
                  2023-05-04~2023-05019까지의 쿠폰내역
                </div>
                <div>
                  <ProductTable13 />
                </div>
              </div>
              <div className={`mt-[50px]`}>
                <Paging1 />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

PageMyPage13.Layout = LayoutBasic;
export default PageMyPage13;
