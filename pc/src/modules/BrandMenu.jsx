import {Data} from '@/scripts/data_manager';
import {UiControl} from '@/scripts/util';
import Image from 'next/image';
import {Fragment, useEffect} from 'react';

function BrandMenu(props) {
  const { className = '' } = props;

  useEffect(() => {
    // mount
    // console.log('BrandMenu.jsx mount');
    return () => {
      // unmount
      // console.log('BrandMenu.jsx unmount');
      UiControl.brandMenuOff();
    };
  }, []);

  return (
    <>
      <div
        id={`BrandMenu`}
        {...props}
        className={`${className} BrandMenu AccordionWrap absolute left-[0] z-10 w-full`}>
        <div className={`bg-[var(--color6)] p-[20px]`}>
          <ul className={`space-y-[10px]`}>
            {Data.brandList.map((obj, idx) => {
              const { name, logo_img, link } = obj;

              return (
                <Fragment key={idx}>
                  <li>
                    <a
                      href={link}
                      target={`_blank`}
                      className={`grid h-[50px] w-full grid-cols-[auto_auto] items-center justify-between gap-[0] bg-white pl-[30px] pr-[20px]`}>
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
        <div className={`mt-[10px] text-center text-[0px]`}>
          <button
            className={`inline-block`}
            onClick={(evt) => {
              // const target = evt.target.closest('div');
              // console.log(target);
              UiControl.brandMenuOff();
            }}>
            <Image src={`/icons/ico_4.svg`} width={50} height={50} alt='' />
          </button>
        </div>
      </div>
    </>
  );
}

export default BrandMenu;
