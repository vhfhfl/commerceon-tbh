import LayoutBasic from '@/layouts/LayoutBasic';
import {Fragment} from 'react';

function PageAgree() {
  return (
    <div className={`PageAgree`}>
      <div className={`SubContainer2 mt-[120px]`}>
        <section data-seq={`20230702083816868`} className={``}>
          <div className={`Title-1 BottomBorder`}>
            <div className={`Txt1`}>이용약관</div>
          </div>
          <div className={`AgreeBox1 mt-[40px]`}>
            {Array.from(Array(10)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <p> 제1조(목적)</p>
                  <br />
                  <p>표준약관 제10023호</p>
                  <br />
                  <p>
                    이 약관은 (주)티비에이치글로벌 회사(전자거래 사업자)가 운영하는 TBH SHOP 사이버 몰(이하 "몰"이라
                    한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과 이용자의
                    권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                  </p>
                  <p>※ 「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는한 이 약관을 준용합니다」</p>
                  <br />
                  <br />
                </Fragment>
              );
            })}
            <div className={`SelectBox1 w-[280px]`}>
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
  );
}

PageAgree.Layout = LayoutBasic;
export default PageAgree;
