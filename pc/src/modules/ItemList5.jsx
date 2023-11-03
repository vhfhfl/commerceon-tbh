import RadioBtn from '@/components/form/RadioBtn';
import { Fragment } from 'react';
import TableItem7 from '@/modules/TableItem7';

function ItemList5(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`ItemList5 ${className}`}>
        <table className={`Table1 text-center`}>
          <thead>
            <tr>
              <th className={`w-[70px]`}></th>
              <th className={`w-[518px]`}>상품정보</th>
              <th className={`w-[160px]`}>상품금액</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(2)).map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <Fragment key={idx}>
                      <td>
                        <RadioBtn />
                      </td>
                      <td className={`!text-left`}>
                        <TableItem7 />
                      </td>
                      <td>
                        <div className={`Montserrat text-[16px] font-[500] text-[var(--color1)]`}>39,900원</div>
                      </td>
                    </Fragment>
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

export default ItemList5;
