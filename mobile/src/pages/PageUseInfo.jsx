import LayoutSub4 from '@/layouts/LayoutSub4';
import {Fragment} from 'react';

function PageUseInfo() {
  return (
    <div className={`PageUseInfo`}>
      <div className={`H-Box mt-[30px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702083816868`}>
            <div className={`Title-1 BottomBorder`}>
              <div className={`Txt1`}>이용안내</div>
            </div>
            <div className={`AgreeBox1 mt-[40px]`}>
              {Array.from(Array(10)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <p>■ 회원가입 안내</p>
                    <p>- 저희 TBH SHOP은 기본적으로는 회원제로 운영하고 있습니다.</p>
                    <p>- 회원가입비나 월회비, 연회비 등 어떠한 비용도 청구하지 않는 100% 무료입니다.</p>
                    <p>- 회원 가입 시 기본 '신규 회원가입 축하 10% 쿠폰'이 지급됩니다.</p>
                    <p>: 구매 금액 제한 없음 (최대 할인 100만원)</p>
                    <p>회원 가입 시 자동 발급 (중복 쿠폰 사용 가능)</p>
                    <p>발급일로부터 30일간 사용 가능</p>
                    <br />
                  </Fragment>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PageUseInfo.Layout = LayoutSub4;
export default PageUseInfo;
