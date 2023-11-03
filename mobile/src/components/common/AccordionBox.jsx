import {useEffect, useRef, useState} from 'react';

function AccordionBox(props) {
  const { children, className = '', theme = '1', name } = props;

  const ref_this = useRef();
  const ref_body = useRef();
  const ref_shell = useRef();

  const [uid, setUid] = useState();

  useEffect(() => {
    // mount
    (function repeat_callback() {
      // Body Height 변수 실시간 동기화
      const el_shell = ref_shell.current;
      if (!el_shell) return;

      const shell_hei = el_shell.offsetHeight;

      const el_body = ref_body.current;
      el_body.style.setProperty('--height', `${shell_hei}px`);

      requestAnimationFrame(repeat_callback);
    })();
  }, []);

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .AccordionBox{ --radius:4px; --padding:4px 8px; }
        .AccordionBox{ border:1px solid #DDDDDD; border-radius:var(--radius); }
        .AccordionBox > .Head{ transition:all 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); }
        .AccordionBox > .Head{ position:relative; cursor:pointer; padding:var(--padding); border-radius:var(--radius); }
        .AccordionBox > .Head{ background-color:#EEEEEE; }
        .AccordionBox.On > .Head{ border-bottom:none; border-bottom-left-radius:0; border-bottom-right-radius:0; }
        .AccordionBox > .Head:after{ transition:transform 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:transform; }
        .AccordionBox > .Head:after{ pointer-events:none; background-image:url('/icons/basic/dropdown_arrow.svg'); width:20px; height:20px; margin-top:-10px; top:50%; right:var(--radius); display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
        .AccordionBox.On > .Head:after{ transform:rotate(180deg); }
        .AccordionBox > .Head:hover{ background-color:#666666; color:white; }
        .AccordionBox > .Body{ transition:all 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); }
        .AccordionBox > .Body{ overflow:hidden; }
        .AccordionBox:not(.On) > .Body{ height:0; }
        .AccordionBox.On > .Body{ height:var(--height); }
        .AccordionBox > .Body > .Shell{ padding:var(--padding); }
      `}</style>
      <div ref={ref_this} {...props} className={`AccordionBox ${className} ${theme && `Theme-${theme}`}`}>
        <div
          className={`Head`}
          onClick={(evt) => {
            const el_other_AB = document.querySelectorAll(`.AccordionBox.On`);
            const el_AccordionBox = ref_this.current;

            el_other_AB.forEach((el, idx) => {
              if (el != el_AccordionBox) el.classList.remove('On');
            });

            el_AccordionBox.classList.toggle('On');
          }}>
          {children[0]}
        </div>
        <div ref={ref_body} className={`Body`}>
          <div ref={ref_shell} className={`Shell`}>
            {children[1]}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccordionBox;
