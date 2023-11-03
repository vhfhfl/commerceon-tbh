import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable15 from '@/modules/FormTable15';
import FormTable16 from '@/modules/FormTable16';
import FormTable17 from "@/modules/FormTable17";
import MyPageAside from '@/modules/MyPageAside';

function PageMyPage20() {
  return (
    <div className={`PageMyPage20`}>
      <div className={`SubContainer mt-[120px]`}>
        <article className={`grid grid-cols-[290px_1fr] gap-[0]`}>
          <div>
            <MyPageAside />
          </div>
          <div>
            <section data-seq={`20230710133111456`} className={``}>
              <div className={`Title-1`}>
                <div className={`Txt1`}>1:1문의</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div
                className={`relative bg-[#f5f5f5] px-[20px] py-[15px] text-[14px] font-[400] leading-[20px] text-[#888]`}>
                상품, 주문, CS등 궁금하신 사항에 대해서 문의하시면 관리자가 순차적으로 답변해 드립니다.
                <br />이 게시판은 단순 문의 게시판으로 교환/환불/취소 신청은 [마이페이지 &gt; 주문내역]에서 신청하셔야
                합니다.
                <a
                  href='https://www.google.com'
                  target='_blank'
                  className={`absolute bottom-[15px] right-[20px] z-10 flex flex-row items-center justify-center gap-[0] text-[14px] font-[400] text-[#68f]`}>
                  주문내역 바로가기
                  <img src={`/icons/zco_82.svg`} alt={``} />
                </a>
              </div>
              <div className={`mt-[34px]`}>
                <FormTable15 />
              </div>
            </section>
            <section data-seq={`20230710133111456`} className={`mt-[40px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>추가 문의</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div className={``}>
                <FormTable16 />
              </div>
            </section>
            <section data-seq={`20230710133111456`} className={`mt-[40px]`}>
              <div className={`Title-2`}>
                <div className={`Txt1`}>추가 문의하기</div>
                {/*<div className={`Txt2`}>각 항목별로 더 많은 궁금증을 해결하실 수 있습니다.</div>*/}
              </div>
              <div className={``}>
                <FormTable17 />
              </div>
            </section>
            <section data-seq={`20230710134542015`} className={`mt-[40px]`}>
              <article className={`mt-[78px] flex flex-row items-center justify-center gap-[14px]`}>
                <button className={`ButtonXl ButtonStyle1 w-[190px]`}>목록으로</button>
                <button className={`ButtonXl ButtonStyle2 w-[190px]`}>저장</button>
                <button className={`ButtonXl ButtonStyle3 w-[190px]`}>삭제</button>
              </article>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

PageMyPage20.Layout = LayoutBasic;
export default PageMyPage20;
