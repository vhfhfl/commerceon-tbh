import {useRef} from 'react';

function SwitchBtn(props) {
  const { children } = props;

  const ref_input = useRef();

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .SWITCH-1{ --width:44px; --height:24px; --radius:calc(var(--height) / 2); }
        .SWITCH-1{ display:flex; align-items:center; user-select:none; }
        .SWITCH-1 > input{ cursor:pointer; appearance:none; }
        .SWITCH-1 > input{ width:var(--width); height:var(--height); border-radius:var(--radius); }
        .SWITCH-1 > input{ border:1px solid var(--form-border-color); background-color:white; }
        .SWITCH-1 > input{ background-image:url('/icons/basic/switch_circle.svg'); background-repeat:no-repeat; background-size:contain; background-position:left center; }
        .SWITCH-1 > input{ transition:all 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); }
        .SWITCH-1 > input:focus{ border-color:#86B7FE; box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%); }
        .SWITCH-1 > input:checked{ border-color:var(--form-active-color); background-color:var(--form-active-color); }
        .SWITCH-1 > input:checked{ background-image:url('/icons/basic/switch_circle_on.svg'); background-position:right center; }
        .SWITCH-1 > label{ margin-left:8px; cursor:pointer; }
      `}</style>

      <div
        {...props}
        className={`SwitchBtn SWITCH-1`}
        onClick={(evt) => {
          const el_input = ref_input.current;
          el_input.checked = !el_input.checked;
        }}>
        <input ref={ref_input} type='checkbox' />
        <label>{children} </label>
      </div>
    </>
  );
}

export default SwitchBtn;
