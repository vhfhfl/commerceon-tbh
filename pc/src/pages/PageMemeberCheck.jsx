import LayoutEmpty from '@/layouts/LayoutEmpty';
import {Util} from '@/scripts/util';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useRef} from 'react';

function PageMemeberCheck() {
  const router = useRouter();
  const ref_pw_inp = useRef();

  return (
    <div className={`PageMemeberCheck`}>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <Image
            className='mx-auto h-10 w-auto rounded-md'
            src={`/favicon_commerceon/android-chrome-512x512.png`}
            width={512}
            height={512}
            priority
            alt='로고'
          />
          <h2 className='mt-10 text-center text-[24px] font-bold leading-9 tracking-tight text-gray-900'>
            출입문 비밀번호를 입력해 주세요.
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className='space-y-6'>
            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  ref={ref_pw_inp}
                  name='password'
                  type='password'
                  className='border-[1px] border-solid border-[#333] block w-full rounded-md border-0 px-[10px] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                  onKeyDown={(evt) => {
                    if (evt.keyCode == 13) pwCheck();
                  }}
                />
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
                onClick={(evt) => {
                  pwCheck();
                }}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function pwCheck() {
    console.log('pwCheck');
    const el_pw_inp = ref_pw_inp.current;
    const pw_val = el_pw_inp.value.trim();
    if (pw_val == '101120') {
      saveLogin();
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  }

  function saveLogin() {
    console.log('saveLogin');

    const today = Util.getToday();
    window.localStorage.setItem('is_commerceon', today);
    window.location.href = '/';
  }
}

PageMemeberCheck.Layout = LayoutEmpty;
export default PageMemeberCheck;
