import LayoutSub4 from '@/layouts/LayoutSub4';
import InfoTable6 from '@/modules/InfoTable6';

function PageOrder3() {
  return (
    <div className={`PageOrder3`}>
      <section data-seq={`20230702172241447`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`text-center text-[20px] font-[400] leading-[28px] text-[var(--color1)]`}>
              고객님의 주문이
              <br />
              <strong>정상적으로 완료되지 않았습니다.</strong>
              <br />
              다시 결제 진행을 해주시기 바랍니다.
            </div>
          </div>
        </div>
      </section>
      <section data-seq={`20230714145137314`} className={`mt-[20px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`Title-fc63826d`}>주문 정보</div>
            <div>
              <InfoTable6 />
            </div>
            <div className={`mt-[100px] flex flex-row items-center justify-between gap-0`}>
              <button className={`ButtonXl ButtonStyle1 grow`}>쇼핑 계속하기</button>
              <button className={`ButtonXl ButtonStyle2 grow`}>주문 확인하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageOrder3.Layout = LayoutSub4;
export default PageOrder3;
