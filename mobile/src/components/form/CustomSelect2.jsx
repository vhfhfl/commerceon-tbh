import Image from 'next/image';
import {Children, forwardRef, Fragment, useRef, useState} from 'react';

const CustomSelect2 = forwardRef(function CustomSelect2(props, forwardedRef) {
  const { children, className = '', theme = '1', optionsdata } = props;
  const children_cnt = Children.count(children);

  const ref_this = useRef([]);

  const min_hei = 66;
  const max_hei = min_hei * optionsdata.length;
  const [select_data, setSelectData] = useState(optionsdata[0]);

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        .CustomSelect2{ position:relative; z-index:20; height:${min_hei}px; }
        .CustomSelect2 *{ font-family:'Montserrat', Pretendard, sans-serif; }
        .CustomSelect2 .Item{ display:grid; grid-template-columns:46px auto 24px; gap:14px; align-items:center; }
        .CustomSelect2 .Item{ width:100%; position:relative; padding:10px 20px; }
        .CustomSelect2 .Item{ text-align:left; }
        .CustomSelect2 .Item > .Logo{ width:100%; }
        .CustomSelect2 .Item > .Info{ width:100%; }
        .CustomSelect2 .Item > .Info > .Title{ font-weight:700; font-size:12px; color:var(--color1); line-height:100%; }
        .CustomSelect2 .Item > .Info > .Fraction{ font-size:0; }
        .CustomSelect2 .Item > .Info > .Fraction > span{ font-weight:300; font-size:12px; color:var(--color1); line-height:100%; }
        .CustomSelect2 .Item > .Info > .Fraction > span.Bold{ font-weight:600; }
        .CustomSelect2 .Item .ArrowIcon{ transition:transform 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:transform; }
        .CustomSelect2 .Item .ArrowIcon{ transform:rotate(0deg); }
        .CustomSelect2.On .Item .ArrowIcon{ transform:rotate(180deg); }
        /**/
        .CustomSelect2 > .Label{}
        .CustomSelect2 > .Label > .Item{ width:100%; background-color:#f5f5f5; }
        /**/
        .CustomSelect2 > .Option{ background-color:white; height:0; overflow:hidden; }
        .CustomSelect2 > .Option{ transition:all 300ms cubic-bezier(0.215, 0.610, 0.355, 1.000); will-change:auto; }
        .CustomSelect2.On > .Option{ height:${max_hei}px; border-bottom:1px solid #ececec; }
        .CustomSelect2 > .Option > .Item{ }
        .CustomSelect2 > .Option > .Item .ArrowIcon{ transform:rotate(270deg); }
      `}</style>
      <div
        {...props}
        className={`CustomSelect2 ${className} ${theme && `Theme${theme}`}`}
        ref={(el) => {
          ref_this.current = el;
          if (forwardedRef) forwardedRef.current = el;
        }}>
        <div className={`Label`}>
          <button
            className={`Item`}
            onClick={(evt) => {
              const target = evt.target.closest('div');
              const el = ref_this.current;
              el.classList.toggle('On');
            }}>
            <div className={`Logo`}>
              <Image
                className={`h-[46px] w-[46px] rounded-full`}
                src={select_data.thumbnail_img}
                width={46}
                height={46}
                alt=''
              />
            </div>
            <div className={`Info`}>
              <div className={`Title`}>{select_data.name}</div>
              <div className={`Fraction mt-[10px]`}>
                <span className={`Bold`}>01</span>
                <span className={`mx-[3px]`}>/</span>
                <span>10</span>
              </div>
            </div>
            <div>
              <div
                className={`ArrowIcon 
              flex h-[24px] w-[24px] flex-row 
              items-center justify-center
              `}>
                <Image src={'/icons/icon_6.svg'} width={18} height={18} alt='' />
              </div>
            </div>
          </button>
        </div>
        <div className={`Option`}>
          {optionsdata.map((obj, idx) => {
            const { name, thumbnail_img } = obj;

            return (
              <Fragment key={idx}>
                <button
                  className={`Item`}
                  onClick={(evt) => {
                    const target = evt.target.closest('div');
                    setSelectData(obj);
                    const el = ref_this.current;
                    el.classList.remove('On');
                  }}>
                  <div className={`Logo`}>
                    <Image className={`h-[46px] w-[46px] rounded-full`} src={thumbnail_img} width={46} height={46} alt='' />
                  </div>
                  <div className={`Info`}>
                    <div className={`Title`}>{name}</div>
                    <div className={`Fraction mt-[10px]`}>
                      <span className={`Bold`}>01</span>
                      <span className={`mx-[3px]`}>/</span>
                      <span>12</span>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`ArrowIcon 
                      flex h-[24px] w-[24px] flex-row
                      items-center justify-center
                      `}>
                      <Image className={`Icon`} src={`/icons/icon_6.svg`} width={18} height={18} alt='' />
                    </div>
                  </div>
                </button>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default CustomSelect2;
