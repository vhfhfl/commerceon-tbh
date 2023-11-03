import {useRef} from 'react';

function SelectBox(props) {
  const { children, className = '', theme = '1', size } = props;

  const ref_this = useRef();

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .SelectBox.Theme-1{ --size:20px; --padding:8px; }
        .SelectBox.Theme-1{ cursor:pointer; padding-left:var(--padding); padding-right:calc(var(--padding) + var(--size)); border:1px solid var(--form-border-color); border-radius:var(--form-border-radius); appearance:none; }
        .SelectBox.Theme-1{ background-image:url('/icons/basic/dropdown_arrow.svg'); background-repeat:no-repeat; background-position:right var(--padding) center; background-size:var(--size); }
        .SelectBox.Theme-1{ color:#212529; border:1px solid var(--form-border-color); outline:none; }
        .SelectBox.Theme-1:before{ content:url('/icons/basic/dropdown_arrow_focus.svg'); position:fixed; width:0; height:0; top:-1000%; left:-1000%; overflow:hidden; z-index:0; }
        .SelectBox.Theme-1:focus{ border-color:#86B7FE; box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%); }
        .SelectBox.Theme-1:focus{ background-image:url('/icons/basic/dropdown_arrow_focus.svg'); }
        .SelectBox.Theme-1{ height:var(--form-height); font-size:var(--form-font-size); }
        .SelectBox.Theme-1.SM{ height:var(--form-height-sm); font-size:var(--form-font-size-sm); }
        .SelectBox.Theme-1.LG{ height:var(--form-height-lg); font-size:var(--form-font-size-lg); }
      `}</style>
      <select ref={ref_this} {...props} className={`SelectBox ${className} ${theme && `Theme-${theme}`} ${size}`}>
        {children}
      </select>
    </>
  );
}

export default SelectBox;
