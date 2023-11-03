import { Util } from '@/scripts/util';
import _ from 'lodash';
import React, { Fragment } from 'react';

function TabBtnBox(props) {
  const { children, theme = '' } = props;

  let el_btn_list = [];
  children.map((btn, idx) => {
    const el = React.cloneElement(btn, {
      onClick: (evt) => {
        const el_target = evt.target.closest('button');
        // 버튼 On
        el_target.classList.add('On');

        // 다른 형제 Off
        const el_tab_btn_box = el_target.closest('.TabBtnBox');
        const el_tab_btns_list = el_tab_btn_box.querySelectorAll(`:scope > *`);
        const actived_idx = _.indexOf(el_tab_btns_list, el_target);
        const el_siblings_list = Util.getSiblings(el_target);
        el_siblings_list.forEach((el, idx) => {
          el.classList.remove('On');
        });

        // TabChildBox 찾기
        const id = el_tab_btn_box.getAttribute(`uuid`);
        const el_tab_child_box = document.querySelector(`.TabChildBox[uuid="${id}"]`);
        if (!el_tab_child_box) return;
        const el_tab_childs_list = el_tab_child_box.querySelectorAll(`:scope > div`);

        // uuid 비교해서 해당 부분 On
        const el_active_tab_child = el_tab_childs_list[actived_idx];
        if (!el_active_tab_child) {
          console.log('해당되는 tab_child 없음');
          return;
        }
        el_active_tab_child.classList.add('On');

        // 그외 나머지 Off
        const el_active_tab_child_siblings_list = Util.getSiblings(el_active_tab_child);
        el_active_tab_child_siblings_list.forEach((el, idx) => {
          el.classList.remove('On');
        });
      },
    });

    el_btn_list.push(el);
  });

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .TabBtnBox{ }
        /**/
        .TabBtnBox.Theme1{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:0; }
        .TabBtnBox.Theme1{ border:1px solid #DDDDDD; height:40px; }
        .TabBtnBox.Theme1 > button{ }
        .TabBtnBox.Theme1 > button + button{ border-left:1px solid #DDDDDD; }
        .TabBtnBox.Theme1 > button.On{ background-color:royalblue; color:white; }
        /**/
        .TabBtnBox.Theme2{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:0; }
        .TabBtnBox.Theme2{ border:1px solid #DDDDDD; height:40px; }
        .TabBtnBox.Theme2 > button{ }
        .TabBtnBox.Theme2 > button + button{ border-left:1px solid #DDDDDD; }
        .TabBtnBox.Theme2 > button.On{ background-color:deeppink; color:white; }
        /**/
        .TabBtnBox.Theme3{ white-space:nowrap; overflow:auto; }
        .TabBtnBox.Theme3 > button{ height:54px; padding-left:20px; padding-right:20px; }
        .TabBtnBox.Theme3 > button{ font-weight:400; font-size:14px; color:var(--color1); }
        .TabBtnBox.Theme3 > button.On{ font-weight:600; }
        /**/
        .TabBtnBox.Theme4{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:0; }
        .TabBtnBox.Theme4{ height:50px; color:var(--color1) }
        .TabBtnBox.Theme4 > button{ border:1px solid transparent; border-bottom-color:var(--color1); background-color:var(--color7); }
        .TabBtnBox.Theme4 > button{ font-weight:600; font-size:12px; color:var(--color1); }
        .TabBtnBox.Theme4 > button.On{ background-color:white; border-color:var(--color1); border-bottom-color:transparent; }
        /**/
        .TabBtnBox.Theme5{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:6px; }
        .TabBtnBox.Theme5 > button{ position:relative; padding-top:14px; padding-bottom:30px; }
        .TabBtnBox.Theme5 > button:before{ border-radius:10px; border:1px solid var(--color6); width:100%; height:100%; top:0px; left:0px; display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
        .TabBtnBox.Theme5 > button.On:before{ border-width:2px; border-color:var(--color1) }
        .TabBtnBox.Theme5 > button > .Icon{ height:76px; display:flex; align-items:center; justify-content:center; }
        .TabBtnBox.Theme5 > button > .Label{ font-weight:400; font-size:10px; color:var(--color1); }
        /**/
        .TabBtnBox.Theme6{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:6px; }
        .TabBtnBox.Theme6 > button{ position:relative; height:40px; padding-top:10px; padding-bottom:10px; border-radius:10px 10px 0 0; }
        .TabBtnBox.Theme6 > button{ color:var(--color1); background-color:var(--color6); }
        .TabBtnBox.Theme6 > button{ font-weight:400; font-size:14px; }
        .TabBtnBox.Theme6 > button:before{ width:100%; height:100%; top:0px; left:0px; display:inline-block; content:''; position:absolute; z-index:3; background-position:center; background-repeat:no-repeat; }
        .TabBtnBox.Theme6 > button.On{ color:white; background-color:var(--color1); }
        /**/
        .TabBtnBox.Theme7{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:0; }
        .TabBtnBox.Theme7{ border:1px solid #161616; height:36px; }
        .TabBtnBox.Theme7 > button{ font-weight:400; font-size:14px; }
        .TabBtnBox.Theme7 > button + button{ border-left:1px solid #161616; }
        .TabBtnBox.Theme7 > button.On{ background-color:#161616; color:white; }
        /**/
        .TabBtnBox.Theme8{ display:grid; grid-template-columns:repeat(auto-fit, minmax(0, 1fr)); gap:0; }
        .TabBtnBox.Theme8{ border:1px solid #161616; height:48px; }
        .TabBtnBox.Theme8 > button{ font-weight:400; font-size:14px; }
        .TabBtnBox.Theme8 > button + button{ border-left:1px solid #161616; }
        .TabBtnBox.Theme8 > button.On{ background-color:#161616; color:white; }
      `}</style>
      <div {...props} className={`TabBtnBox ${theme && `Theme${theme}`}`}>
        {el_btn_list.map((el_btn, idx) => {
          return <Fragment key={idx}>{el_btn}</Fragment>;
        })}
      </div>
    </>
  );
}
export default TabBtnBox;
