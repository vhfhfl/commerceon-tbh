import {Data} from '@/scripts/data_manager';
import Link from 'next/link';
import {Fragment} from 'react';

function Gnb(props) {
  const { className = '' } = props;

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        #Gnb{--hei:46px;}
        #Gnb{height:var(--hei);}
        #Gnb > .Shell{height:var(--hei);background-color:white;}
        #Gnb > .Shell{width:100% !important;overflow:auto;}
        #Gnb > .Shell > ul{display:inline-block;height:100%;padding:0 var(--contents-side-padding);font-size:0;white-space:nowrap;}
        #Gnb > .Shell > ul > li{display:inline-block;height:100%;}
        #Gnb > .Shell > ul > li + li{margin-left:18px;}
        #Gnb > .Shell > ul > li > a{position:relative;}
        #Gnb > .Shell > ul > li > a{height:100%;display:flex;align-items:center;justify-content:center;}
        #Gnb > .Shell > ul > li > a > .title{color:var(--color5);position:relative;font-weight:500;font-size:12px;line-height:100%;white-space:nowrap;}
        #Gnb > .Shell > ul > li.Bold > a > .title{font-weight:600;color:var(--color1);}
        #Gnb > .Shell > ul > li > a > .title > .dot{z-index:0;position:absolute;top:-4px;right:-4px;}
        #Gnb > .Shell > ul > li > a > .title > .dot{width:4px;height:4px;background-color:var(--color4);border-radius:100%;}
        #Gnb > .Shell > ul > li > a > .title > .dot{display:none;}
        #Gnb > .Shell > ul > li.On > a > .title > .dot{display:block;}
      `}</style>
      <div {...props} className={`RR Gnb StickyBox ${className}`} id={`Gnb`} data-sticky-offset={0}>
        <div className={'Shell'}>
          <ul>
            {Data.gnb.map((obj, idx) => {
              const { title, bold, red_dot, link } = obj;

              return (
                <Fragment key={idx}>
                  <li className={`${bold && `Bold`} ${red_dot && `On`}`}>
                    <Link href={link}>
                      <div className={`Montserrat title`}>
                        {title}
                        <div className={`dot`}></div>
                      </div>
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Gnb;
