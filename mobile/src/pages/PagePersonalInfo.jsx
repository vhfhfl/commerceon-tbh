import LayoutSub4 from "@/layouts/LayoutSub4";
import {Fragment} from 'react';

function PagePersonalInfo() {
  return (
    <div className={`PagePersonalInfo`}>
      <div className={`H-Box mt-[30px]`}>
        <div className={`Inner`}>
          <section data-seq={`20230702083816868`}>
            <div className={`Title-1 BottomBorder`}>
              <div className={`Txt1`}>개인정보처리방침</div>
            </div>
            <div className={`AgreeBox1 mt-[40px]`}>
              {Array.from(Array(10)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <p>
                      (주)티비에이치글로벌은 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
                      있도록 다음과 같이 개인정보 처리방침을 수립·공개하며, 본 개인정보 처리방침을 홈페이지 첫 화면에
                      공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다. 개인정보 처리방침은
                      정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른
                      개인정보 처리방침의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 이용자들께서는 사이트
                      방문 시 수시로 확인하시기 바랍니다.
                    </p>
                    <br />
                    <p>(주)티비에이치글로벌의 개인정보 처리방침은 다음과 같은 내용을 담고 있습니다.</p>
                    <br />
                    <p>1. 개인정보 수집에 대한 동의</p>
                    <p>2. 수집하는 개인정보 항목 및 수집방법3. 개인정보의 수집 및 이용목적</p>
                    <p>4. 수집하는 개인정보의 보유 및 이용기간5. 개인정보의 파기 절차 및 방법</p>
                    <p>6. 수집한 개인정보의 공유 및 제공</p>
                    <p>7. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항</p>
                    <p>8. 쿠키(Cookie)의 운용 및 거부9. 개인정보의 위탁처리</p>
                    <p>10. 개인정보보호를 위한 기술적/관리적 대책</p>
                    <p>11. 개인정보 관련 의견수렴 및 불만처리에 관한 사항</p>
                    <p>12. 개인정보 보호책임자 및 담당자의 소속-성명 및 연락처</p>
                    <p>13. 이용자 및 법정대리인의 권리와 그 행사방법14. 권익침해 구제방법15. 고지의 의무</p>
                    <br />
                  </Fragment>
                );
              })}
              <div className={`SelectBox1 mt-[50px] w-[280px]`}>
                <button>
                  <div>시행일자 : 2020.04.13 (현재시행중)</div>
                </button>
                <div className={`Options`}>
                  <button>A</button>
                  <button>B</button>
                  <button>C</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

PagePersonalInfo.Layout = LayoutSub4;
export default PagePersonalInfo;
