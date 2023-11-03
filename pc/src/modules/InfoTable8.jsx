import { Fragment } from 'react';

function InfoTable8(props) {
  const { className = '' } = props;
  return (
    <>
      <div className={`InfoTable8 ${className}`}>
        <table className={`Table3`}>
          <colgroup>
            <col className={`w-[100px]`} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>사이즈</th>
              {Array.from(Array(8)).map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <td className={`Gray`}>029</td>
                  </Fragment>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {['허리둘레', '힙둘레', '허벅지둘레', '총장', '밑위길이'].map((obj, idx) => {
              return (
                <Fragment key={idx}>
                  <tr>
                    <th>{obj}</th>
                    {Array.from(Array(8)).map((obj, idx) => {
                      return (
                        <Fragment key={idx}>
                          <td>029</td>
                        </Fragment>
                      );
                    })}
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

export default InfoTable8;