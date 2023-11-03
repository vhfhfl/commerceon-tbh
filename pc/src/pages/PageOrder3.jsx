import LayoutBasic from '@/layouts/LayoutBasic';
import FormTable5 from '@/modules/FormTable5';

function PageOrder2() {
  return (
    <div className={`PageOrder2`}>
      <section data-seq={`20230619174519159`} className={`mt-[120px]`}>
        <div className={`SubContainer`}>
          <div className={`text-[28px] font-[600] text-[var(--color1)]`}>주문 실패</div>
          <div
            className={`mt-[36px] text-center text-[30px] font-[400] leading-[42px] tracking-[-0.15px] text-[var(--color1)]`}>
            고객님의 주문이
            <br />
            <strong className={`font-[700]`}>정상적으로 완료되지 않았습니다.</strong>
            <br />
            다시 결제 진행을 해주시기 바랍니다.
          </div>
          <div className={`mt-[10px] text-[18px] font-[600] text-[var(--color1)]`}>주문 정보</div>
          <div className={`mt-[20px]`}>
            <FormTable5 />
          </div>
        </div>
      </section>
      <section data-seq={`20230626133948897`} className={`mt-[40px]`}>
        <div className={`SubContainer`}>
          <div className={`mt-[60px] flex flex-row items-center justify-center gap-[16px]`}>
            <button className={`ButtonXl ButtonStyle2 w-[230px]`}>주문서로 돌아가기</button>
          </div>
        </div>
      </section>
    </div>
  );
}

PageOrder2.Layout = LayoutBasic;
export default PageOrder2;
