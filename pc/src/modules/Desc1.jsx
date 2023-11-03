import {useRef} from 'react';

function Desc1(props) {
  const { className = '' } = props;
  const ref_this = useRef();
  return (
    <>
      <div ref={ref_this} className={`Desc1 ${className}`}>
        <ul className={`Desc-1`}>
          <li>
            1) 교환/반품 요청은 배송완료일 기준으로 1주일내에만 가능합니다. 취소/교환/반품에 대한 자세한 문의는 고객센터
            '1:1' 문의하시면 정성껏 답변해 드리겠습니다.
          </li>
          <li>2) 교환,반품 시 상품은 1개의 포장으로 부탁드리며, 개별 반품시 비용이 발생할 수 있습니다.</li>
        </ul>
      </div>
    </>
  );
}

export default Desc1;
