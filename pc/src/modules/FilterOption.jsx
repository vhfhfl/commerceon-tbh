import CheckBox from '@/components/form/CheckBox';
import {Fragment, useRef} from 'react';

function FilterOption(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`FilterOption ${className}`}>
        <div className={`text-[16px] font-[500] text-[var(--colo1)]`}>166 개의 상품</div>
        <div className={`mt-[29px]`}>
          <div className={`text-[24px] font-[700] text-[var(--color1)]`}>브랜드</div>
        </div>
        <ul className={`mt-[15px] space-y-[9px] text-[0px]`}>
          <li>
            <CheckBox checked>마인드브릿지</CheckBox>
          </li>
          <li>
            <CheckBox checked>베이직하우스</CheckBox>
          </li>
          <li>
            <CheckBox checked>쥬시쥬디</CheckBox>
          </li>
          <li>
            <CheckBox checked>아쿠아스큐텀</CheckBox>
          </li>
        </ul>
      </div>
      {/*prettier-ignore*/}
      <style jsx global>{`
        // 전역 선언
        .FilterMenu{ font-size:0; }
        .FilterMenu > li{ border-top:1px solid var(--color6); }
        .FilterMenu > li > button{ position:relative; text-align:left; }
        .FilterMenu > li > button{ font-weight:700; font-size:24px; color:var(--color1); }
        .FilterMenu > li > button{ padding-right:20px; width:100%; height:90px; }
        .FilterMenu > li > button:after{ background-image:url(/icons/zco_35.svg);  width:20px; height:100%; top:0px; right:0px; display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
        .FilterMenu > li > button:after{ transition:transform 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:transform; }
        .FilterMenu > li.On > button:after{ transform:rotate(180deg); }
        .FilterMenu > li > ul{ display:none; padding-bottom:30px; }
        .FilterMenu > li.On > ul{ display:block; }
        .FilterMenu > li > ul > li{ }
        .FilterMenu > li > ul > li > button{ font-weight:400; font-size:16px; color:var(--color1); text-align:left; }
        .FilterMenu > li > ul > li > button{ padding-right:20px; position:relative; width:100%; height:30px; }
        .FilterMenu > li > ul > li > button:after{ background-image:url(/icons/zco_36.svg);  width:20px; height:100%; top:0px; right:0px; display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
        .FilterMenu > li > ul > li > button:after{ transition:transform 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:transform; }
        .FilterMenu > li > ul > li.On > button:after{ transform:rotate(180deg); }
        .FilterMenu > li > ul > li > ul{ padding-left:30px; display:none; }
        .FilterMenu > li > ul > li.On > ul{ display:block; }
        .FilterMenu > li > ul > li > ul{ padding-top:10px; padding-bottom:10px; }
        .FilterMenu > li > ul > li > ul > li{ }
        .FilterMenu > li > ul > li > ul > li + li{ margin-top:10px; }
        .FilterMenu > li > ul > li > ul > li > .dep_3{ display:grid; grid-template-columns:auto 1fr; gap:0; }
        .FilterMenu > li > ul > li > ul > li > .dep_3 > button{ padding-right:20px; position:relative; margin-left:10px; font-weight:400; font-size:16px; height:30px; text-align:left; }
        .FilterMenu > li > ul > li > ul > li > .dep_3 > button:after{ background-image:url(/icons/zco_36.svg); width:20px; height:100%; top:0px; right:0px; display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
        .FilterMenu > li > ul > li > ul > li > .dep_3 > button:after{ transition:transform 300ms cubic-bezier(0.33, 1, 0.68, 1); will-change:transform; }
        .FilterMenu > li > ul > li > ul > li.On > .dep_3 > button:after{ transform:rotate(180deg); }
        .FilterMenu > li > ul > li > ul > li > ul{ display:none; padding-left:30px; padding-top:10px; padding-bottom:10px; }
        .FilterMenu > li > ul > li > ul > li.On > ul{ display:block; }
        .FilterMenu > li > ul > li > ul > li > ul > li{  }
        .FilterMenu > li > ul > li > ul > li > ul > li + li{ margin-top:10px; }
        .FilterMenu > li > ul > li > ul > li > ul > li > .dep_4{ display:grid; grid-template-columns:auto 1fr; gap:0; }
        .FilterMenu > li > ul > li > ul > li > ul > li > .dep_4 > button{ position:relative; margin-left:10px; font-weight:400; font-size:16px; height:30px; text-align:left; }
      `}</style>
      <ul className={`FilterMenu mt-[30px]`}>
        {['카테고리', '사이즈', '가격', '상태', '컬러', '시즌'].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <li className={`${idx == 0 && `On`}`}>
                <button
                  className={`dep_1`}
                  onClick={(evt) => {
                    const target = evt.target.closest('li');
                    target.classList.toggle('On');
                  }}>
                  {obj}
                </button>
                <ul className={``}>
                  {['남성', '여성'].map((obj2, idx2) => {
                    return (
                      <Fragment key={idx2}>
                        <li className={`${idx2 == 0 && `On`}`}>
                          <button
                            className={`dep_2`}
                            onClick={(evt) => {
                              const target = evt.target.closest('li');
                              target.classList.toggle('On');
                            }}>
                            {obj2}
                          </button>
                          <ul>
                            {['아우터', '이너', '바텀'].map((obj3, idx3) => {
                              return (
                                <Fragment key={idx3}>
                                  <li className={`${idx3 == 0 && `On`}`}>
                                    <div className={`dep_3`}>
                                      <CheckBox></CheckBox>
                                      <button
                                        onClick={(evt) => {
                                          const target = evt.target.closest('li');
                                          target.classList.toggle('On');
                                        }}>
                                        {obj3}(999)
                                      </button>
                                    </div>
                                    <ul>
                                      {['다운/패딩', '코트', '자켓', '점퍼', '가디건'].map((obj4, idx4) => {
                                        return (
                                          <Fragment key={idx4}>
                                            <li>
                                              <div className={`dep_4`}>
                                                <CheckBox></CheckBox>
                                                <button>{obj4}(999)</button>
                                              </div>
                                            </li>
                                          </Fragment>
                                        );
                                      })}
                                    </ul>
                                  </li>
                                </Fragment>
                              );
                            })}
                          </ul>
                        </li>
                      </Fragment>
                    );
                  })}
                </ul>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default FilterOption;
