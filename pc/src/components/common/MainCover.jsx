import {useRef} from 'react';

function MainCover(props) {
  const { children, className = '' } = props;

  const ref_this = useRef();

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        .MainCover{ z-index:100; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:rgba(0, 0, 0, .5); pointer-events:none; }
        .MainCover{ opacity:0; }
        .MainCover{ transition:opacity 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:auto; }
        .CoverOn .MainCover{ opacity:1; }
      `}</style>
      <div {...props} className={`MainCover ${className}`} ref={ref_this}></div>
    </>
  );
}

export default MainCover;
