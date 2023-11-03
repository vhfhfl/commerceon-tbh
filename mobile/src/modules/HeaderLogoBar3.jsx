import BrandMenu from '@/modules/BrandMenu';
import {UiControl} from '@/scripts/util';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

function HeaderLogoBar3(props) {
  const { className = '' } = props;

  const router = useRouter();

  return (
    <>
      <div {...props} className={`HeaderLogoBar3 ${className}`} id='HeaderLogoBar3'>
        <div className={`RR Shell relative h-[var(--header-logo-bar3-hei)] bg-white`}>
          {/* 2023-05-06 :: START :: KSM : BAR */}
          <div
            className={`RR relative top-[calc(50%+4px)] grid -translate-y-1/2 grid-cols-[1fr,auto] content-start justify-between gap-[0] px-[var(--contents-side-padding)]`}>
            <div className={` flex flex-row items-center justify-between`}>
              <div>
                <button
                  className={` flex h-[var(--header-logo-bar3-child-hei)] flex-row items-center justify-center`}
                  onClick={(evt) => {
                    // const target = evt.target.closest('div');
                    // console.log(target);
                    if (UiControl.brandMenu) {
                      UiControl.brandMenuOff();
                    } else {
                      UiControl.brandMenuOn();
                    }
                  }}>
                  <div>
                    <Image src={`/logos/brand_logo_black.svg`} width={105} height={13} alt='로고' />
                  </div>

                  <Image
                    className={`Icon ml-[4px] h-[24px] w-[24px]`}
                    src={`/icons/icon_9.svg`}
                    width={24}
                    height={24}
                    alt=''
                  />
                </button>
              </div>
              <div>
                <div className={`flex flex-row items-center justify-center`}>
                  <Link
                    href={`#`}
                    className={`block h-[var(--header-logo-bar3-child-hei)] w-[var(--header-logo-bar3-child-hei)]`}>
                    <Image className={`Icon`} src={`/icons/icon_10_1.svg`} width={24} height={24} alt='' />
                    {/*<Image src={`/icons/icon_10_1_on.svg`} width={24} height={24} alt=""/>*/}
                  </Link>
                  <Link
                    href={`#`}
                    className={`ml-[8px] block h-[var(--header-logo-bar3-child-hei)] w-[var(--header-logo-bar3-child-hei)]`}>
                    {/*<Image src={`/icons/icon_10_2.svg`} width={24} height={24} alt=""/>*/}
                    <Image className={`Icon`} src={`/icons/icon_10_2_on.svg`} width={24} height={24} alt='' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* // 2023-05-06 :: END :: KSM : BAR */}
          <BrandMenu className={`top-[var(--header-logo-bar3-hei)]`} />
        </div>
      </div>
    </>
  );
}

export default HeaderLogoBar3;
