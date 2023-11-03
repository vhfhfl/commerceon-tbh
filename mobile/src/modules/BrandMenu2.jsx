import {Data} from '@/scripts/data_manager';
import {UiControl} from '@/scripts/util';
import Image from 'next/image';
import {Fragment, useEffect} from 'react';

function BrandMenu2(props) {
  const { className = '' } = props;

  useEffect(() => {
    // mount
    // console.log('BrandMenu2.jsx mount');
    return () => {
      // unmount
      // console.log('BrandMenu2.jsx unmount');
      UiControl.brandMenuOff();
    };
  }, []);

  return (
    <>
      <div id={`BrandMenu2`} {...props} className={`${className} BrandMenu2`}>
        <div className={`px-[20px]`}>
          <ul className={`space-y-[10px]`}>
            {Data.brandList.map((obj, idx) => {
              const { name, logo_img, link } = obj;

              return (
                <Fragment key={idx}>
                  <li>
                    <a
                      href={link}
                      target={`_blank`}
                      className={`grid h-[50px] w-full grid-cols-[auto_auto] items-center justify-between gap-[0] bg-white pr-[20px]`}>
                      <div>
                        <Image className={`Unknown`} src={logo_img} width={0} height={0} alt='브랜드 로고' />
                      </div>
                      <div>
                        <button className={`flex flex-row items-center justify-center`}>
                          <div className={`text-[14px] font-[300] text-[var(--color5)]`}>브랜드관</div>
                          <Image className={`ml-[5px]`} src={`/icons/ico_3.svg`} width={10} height={10} alt='' />
                        </button>
                      </div>
                    </a>
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

export default BrandMenu2;
