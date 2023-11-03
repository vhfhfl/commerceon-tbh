import LayoutBasic from '@/layouts/LayoutBasic';
import Image from 'next/image';
import {Fragment} from 'react';

function PageTest() {
  return (
    <div className={`PageTest`}>
      <ul className={`mx-auto flex flex-row items-center justify-center gap-[10px]`}>
        {['🍎', '🍋', '🥑'].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <li
                className={`flex flex-row items-center justify-center border-[1px] border-solid border-[red] p-[50px] [&.On]:border-[2px]`}>
                <button
                  onClick={(evt) => {
                    const target = evt.target.closest('li');
                    const lis = evt.target.closest('ul').querySelectorAll(`:scope > li`);
                    lis.forEach((obj, idx) => {
                      obj.classList.remove('On');
                    });
                    target.classList.add('On');
                  }}>
                  <Image src={`https://picsum.photos/50/50.jpg?random=1`} width={50} height={50} alt='' />
                </button>
              </li>
            </Fragment>
          );
        })}
      </ul>
      <br />
      <br />
      <br />
      <ul className={`mx-auto flex flex-row items-center justify-center gap-[10px]`}>
        {['🍎', '🍋', '🥑'].map((obj, idx) => {
          return (
            <Fragment key={idx}>
              <li className={`relative flex flex-row items-center justify-center p-[50px]`}>
                <div className={`[li.On_>_&]:border-[2px] border-[1px] border-solid border-[red] z-10 absolute top-[0] left-[0] w-full h-full pointer-events-none`}></div>
                <button
                  onClick={(evt) => {
                    const target = evt.target.closest('li');
                    const lis = evt.target.closest('ul').querySelectorAll(`:scope > li`);
                    lis.forEach((obj, idx) => {
                      obj.classList.remove('On');
                    });
                    target.classList.add('On');
                  }}>
                  <Image src={`https://picsum.photos/50/50.jpg?random=1`} width={50} height={50} alt='' />
                </button>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

PageTest.Layout = LayoutBasic;
export default PageTest;
