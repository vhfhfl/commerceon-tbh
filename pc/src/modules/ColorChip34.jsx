import {Data} from '@/scripts/data_manager';
import {Util} from '@/scripts/util';
import {Fragment} from "react";

function ColorChip34() {
  return (
    <>
      <div className={`ColorChip34`}>
        <article className={`inline-grid grid-cols-10 gap-[5px]`}>
          {Data.colorList.map((obj, idx) => {
            const chk_color = Util.getGoodColor(obj);
            const border_color = obj == '#ffffff' ? '#D4D4D4' : obj;

            return (
              <Fragment key={idx}>
                <button
                  className={`ColorButton34`}
                  style={{ color: chk_color, backgroundColor: obj, borderColor: border_color }}>
                  <svg className={`w-[12px]`} viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1 4.5L5 9L11 1' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </button>
              </Fragment>
            );
          })}
        </article>
      </div>
    </>
  );
}

export default ColorChip34;
