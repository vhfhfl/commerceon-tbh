import {Fragment, useEffect, useRef, useState} from 'react';

function CustomSelect(props) {
  const { children, className, theme = '1', size } = props;

  const [selected_text, setSelectedText] = useState(children[0].props.children);

  const ref_select = useRef();

  useEffect(() => {
    // mount
    const el_select = ref_select.current;
    const init_value = children[0].props.value;
    el_select.setAttribute(`value`, init_value);
  }, []);

  return (
    <>
      {/*prettier-ignore*/}
      <style jsx global>{`
        /* 전역 선언 */
        /**/
        .CustomSelect{}
        .CustomSelect > .bg{ z-index:0; position:fixed; top:0; left:0; width:100%; height:100%; }
        .CustomSelect > .bg{ display:none; }
        .CustomSelect > :not(.bg){ position:relative; z-index:1; }
        .CustomSelect.On > .bg{ display:block; }
        .CustomSelect.Theme1{ --size:20px; --padding:8px; }
        .CustomSelect.Theme1{ user-select:none; cursor:pointer; border-radius:var(--form-border-radius); border:1px solid var(--form-border-color); }
        .CustomSelect.Theme1{ position:relative; height:var(--form-height); font-size:var(--form-font-size); }
        .CustomSelect.Theme1.On{ border-color:#86B7FE; box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%); }
        .CustomSelect.Theme1 > label{ cursor:pointer; padding-left:var(--padding); padding-right:calc(var(--padding) + var(--size)); }
        .CustomSelect.Theme1 > label{ display:flex; align-items:center; height:100%; border-radius:var(--form-border-radius); }
        .CustomSelect.Theme1 > label{ background-color:white; background-image:url('/icons/basic/dropdown_arrow.svg'); background-repeat:no-repeat; background-position:right var(--padding) center; background-size:var(--size); }
        .CustomSelect.Theme1.On > label{ border-color:#86B7FE; box-shadow:0 0 0 0.25rem rgb(13 110 253 / 25%); }
        .CustomSelect.Theme1.On > label{ background-image:url('/icons/basic/dropdown_arrow_focus.svg'); }
        .CustomSelect.Theme1.SM{ height:var(--form-height-sm); font-size:var(--form-font-size-sm); }
        .CustomSelect.Theme1.LG{ height:var(--form-height-lg); font-size:var(--form-font-size-lg); }
        .CustomSelect.Theme1 > ul{ z-index:0; position:relative; width:100%; }
        .CustomSelect.Theme1 > ul{ border-radius:var(--form-border-radius); border:1px solid var(--form-border-color); background-color:white; margin-top:2px; display:block; overflow:auto; }
        .CustomSelect.Theme1 > ul{ display:none; }
        .CustomSelect.Theme1.On > ul{ display:block; }
        .CustomSelect.Theme1 > ul > li{ padding-left:10px; padding-right:10px; }
        .CustomSelect.Theme1 > ul > li:hover{ background-color:var(--form-active-color); color:white; }
      `}</style>
      <div ref={ref_select} {...props} className={`CustomSelect ${className} ${theme && `Theme${theme}`} ${size}`}>
        <input type='hidden' defaultValue={selected_text} />
        <div
          className={`bg`}
          onClick={(evt) => {
            const el_select = ref_select.current;
            el_select.classList.remove('On');
          }}></div>
        <label
          onClick={(evt) => {
            const el_c_select_list = document.querySelectorAll(`.CustomSelect`);
            el_c_select_list.forEach((sel, idx) => {
              sel.classList.remove('On');
            });

            const el_select = ref_select.current;
            el_select.classList.toggle('On');
          }}>
          {selected_text}
        </label>
        <ul>
          {children.map((obj, idx) => {
            const data = obj.props;

            return (
              <Fragment key={idx}>
                <li
                  value={data.value}
                  onClick={(evt) => {
                    const el_li = evt.target;
                    const text = el_li.innerText;
                    const value = el_li.getAttribute(`value`);
                    const el_select = ref_select.current;
                    el_select.setAttribute(`value`, value);
                    setSelectedText(text);
                    el_select.classList.remove('On');
                  }}>
                  {data.children}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CustomSelect;
