import GnbCategory2 from '@/modules/GnbCategory2';
import GnbRightMenu2_2 from '@/modules/GnbRightMenu2_2';
import GnbRightMenu_2 from "@/modules/GnbRightMenu_2";
import Image from 'next/image';

function Gnb3(props) {
  const { className = '' } = props;

  return (
    <>
      <div {...props} className={`Gnb3 ${className} relative z-0 bg-[var(--color1)]`} id={`Gnb`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div
              className={`grid h-[var(--gnb-hei)] grid-cols-[repeat(2,minmax(0,auto))] justify-between gap-[0] pt-[37px]`}>
              <div>
                {/*LEFT*/}
                <GnbCategory2 />
              </div>
              <div>
                {/*RIGHT*/}
                <div className={`relative flex flex-row items-center`}>
                  <div>
                    <GnbRightMenu2_2 />
                  </div>
                  <div className={`mx-[20px]`}>
                    <div className={`h-[18px] w-[1px] bg-[var(--color3)]`}></div>
                  </div>
                  <div>
                    <GnbRightMenu_2 />
                  </div>
                  <div className={`ml-[20px] w-[62px]`}>
                    <button
                      className={`absolute top-1/2 right-[-3px] z-10 mt-[-6px] flex w-[62px] -translate-y-1/2 flex-row items-center justify-center`}>
                      <Image src={`/icons/zco_2_2.svg`} width={62} height={62} priority alt='' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gnb3;
