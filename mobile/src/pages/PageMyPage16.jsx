import LayoutSub from '@/layouts/LayoutSub';

function PageMyPage16() {
  return (
    <div className={`PageMyPage16`}>
      <section data-seq={`20230811162723`} className={`mt-[40px]`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <table className={`Table2 text-left [&_tr_td]:p-[18px_10px] [&_tr_th]:p-[18px_10px]`}>
              <colgroup>
                <col className={`w-[120px]`} />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>사용범위</th>
                  <td>PC+모바일</td>
                </tr>
                <tr>
                  <th>최대 할인/적립 금액</th>
                  <td>10,000원 할인/적립</td>
                </tr>
                <tr>
                  <th>사용 가능 구매액</th>
                  <td>구매금액이 50,000원 이상인 경우</td>
                </tr>
                <tr>
                  <th>쿠폰 중복 사용 여부</th>
                  <td>상품할인별 중복 사용 불가</td>
                </tr>
                <tr>
                  <th>적용 제외 브랜드</th>
                  <td>JUCYJUDY</td>
                </tr>
                <tr>
                  <th>적용 제외 카테고리</th>
                  <td>ACC</td>
                </tr>
                <tr>
                  <th>적용 제외 공급사</th>
                  <td>(주)커머스온</td>
                </tr>
                <tr>
                  <th>적용 제외 상품</th>
                  <td>
                    <div className={`leading-[18px] line-clamp-3`}>
                      별빛이 이름자 추억과 오는 쉬이 새겨지는 멀리 봅니다. 그리고 아름다운 별 어머님, 아직 소녀들의 나의
                      가을 까닭입니다. 파란 속의 하나에 나의 아스라히 너무나 청춘이 이름자를 다 있습니다. 노루, 무덤
                      이름을 까닭입니다. 경, 자랑처럼 추억과 강아지, 내일 하나 하나에 밤이 봅니다. 슬퍼하는 시와 별
                      멀듯이, 걱정도 오면 파란 별 다하지 있습니다. 까닭이요, 그러나 것은 파란 소녀들의 둘 까닭입니다.
                      위에도 없이 하나에 까닭입니다. 하나에 딴은 이웃 듯합니다. 것은 계집애들의 무엇인지 이네들은 멀리
                      잔디가 나는 무덤 까닭입니다. 하나 릴케 다 새겨지는 어머니, 말 내린 별에도 쉬이 있습니다.
                    </div>
                    <div className={`mt-[4px]`}>
                      <button className={`Montserrat text-[12px] font-[700] text-[var(--color1)]`}>더보기</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

PageMyPage16.Layout = LayoutSub;
export default PageMyPage16;
