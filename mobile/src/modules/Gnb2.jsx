import {Data} from '@/scripts/data_manager';
import Link from 'next/link';
import {Fragment} from 'react';

function Gnb2(props) {
  const { className = '' } = props;

  return (
    <>
      {/* prettier-ignore */}
      <style jsx global>{`
        /* 전역 선언 */
        #Gnb2{--hei:46px;}
        #Gnb2{height:var(--hei);}
        #Gnb2 > .Shell{height:var(--hei);background-color:white;}
        #Gnb2 > .Shell{width:100% !important;overflow:auto;}
        #Gnb2 > .Shell > ul{display:inline-block;height:100%;padding:0 var(--contents-side-padding);font-size:0;white-space:nowrap;}
        #Gnb2 > .Shell > ul > li{display:inline-block;height:100%;}
        #Gnb2 > .Shell > ul > li + li{margin-left:18px;}
        #Gnb2 > .Shell > ul > li > a{position:relative;}
        #Gnb2 > .Shell > ul > li > a{height:100%;display:flex;align-items:center;justify-content:center;}
        #Gnb2 > .Shell > ul > li > a > .title{color:var(--color5);position:relative;font-weight:500;font-size:12px;white-space:nowrap;}
        #Gnb2 > .Shell > ul > li.Bold > a > .title{font-weight:700;color:var(--color1);}
        #Gnb2 > .Shell > ul > li > a > .title > .dot{z-index:0;position:absolute;top:-4px;right:-4px;}
        #Gnb2 > .Shell > ul > li > a > .title > .dot{width:4px;height:4px;background-color:var(--color10);border-radius:100%;}
        #Gnb2 > .Shell > ul > li > a > .title > .dot{display:none;}
        #Gnb2 > .Shell > ul > li.On > a > .title > .dot{display:block;}
      `}</style>
      <div {...props} className={`RR Gnb2 StickyBox ${className}`} id={`Gnb2`}>
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

export default Gnb2;
