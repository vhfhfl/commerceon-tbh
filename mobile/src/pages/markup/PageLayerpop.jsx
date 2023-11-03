import H3 from '@/components/common/H3';
import {LAYER_DATA} from '@/layer_data.js';
import LayoutBasic from '@/layouts/LayoutBasic';
import {Util} from '@/scripts/util';
import dynamic from 'next/dynamic';
import {Fragment, useEffect, useRef} from 'react';

function PageLayerpop() {
  const ref_list = useRef([]);

  useEffect(() => {
    // mount
    console.log('PageLayerpop.jsx mount');

    const el_img_list = ref_list.current;
    el_img_list.forEach((img, idx) => {
      Util.readyNoImage(img);
      img.src = img.getAttribute(`data-src`);
    });

    return () => {
      // unmount
    };
  }, []);


  return (
    <div className={`PageLayerpop`}>
      <br />
      <br />
      <br />
      <section data-seq={`20230507181000302`}>
        <div className={`H-Box`}>
          <div className={`Inner`}>
            <div className={`mx-auto w-full`}>
              <ul className={`space-y-[30px] divide-y-[2px] divide-dashed divide-[#ddd]`}>
                {LAYER_DATA.map((obj, idx) => {
                  const LayerComp = dynamic(() => import(`@/layers/${obj}.jsx`), {
                    ssr: false,
                  });

                  return (
                    <Fragment key={idx}>
                      <li className={`pt-[30px]`}>
                        <H3>{obj}</H3>
                        <div className={`mt-[10px] inline-block bg-blue-400 p-[10px]`}>
                          <LayerComp />
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

PageLayerpop.Layout = LayoutBasic;
export default PageLayerpop;
