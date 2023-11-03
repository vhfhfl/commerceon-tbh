import { Util } from '@/scripts/util';
import { Fragment } from 'react';

import TableItem3 from '@/modules/TableItem3';

function FormTable29(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`FormTable29 ${className}`}>
        <table className={`Table1 NoTop`}>
          <colgroup>
            <col className={`w-[12.8%]`} />
            <col className={`w-[46.12%]`} />
            <col className={`w-[24.23%]`} />
            <col className={`w-[16.85%]`} />
          </colgroup>
          <tbody>
            {Array.from(Array(3)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <td className={`Montserrat text-[var(--color5)]`}>2023.03.13</td>
                    <td className={`!text-left`}>
                      <TableItem3 />
                    </td>
                    <td>
                      <div className={`Montserrat text-[16px] font-[400] leading-[24px] text-[var(--color5)]`}>
                        작성기한: 2023.04.05 <span className={`text-[var(--color1)]`}>(D-21)</span>
                      </div>
                      <div className={`Montserrat text-[16px] font-[400] leading-[24px] text-[var(--color5)]`}>
                        적립금 최대 <span className={`text-[var(--color1)]`}>500원</span>
                      </div>
                    </td>
                    <td>
                      <button className={`ButtonMd ButtonStyle4`}>리뷰 작성</button>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormTable29;
