import AppInfo from '@/components/core/AppInfo';
import LayoutEmpty from '@/layouts/LayoutEmpty';
import {EnterFrame, Layer, Util} from '@/scripts/util';
import '@/styles/globals.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Script from 'next/script';
import {useEffect} from 'react';

// react 에서 페이지 로드시 fontawesome 아이콘이 커지는 것을 방지
config.autoAddCss = false;

function App({ Component, pageProps, router }) {
  // console.log("appRouter == ", router);

  const DynamicLayout = Component.Layout || LayoutEmpty;
  const LayoutName = DynamicLayout.Name || 'NO_NAME';

  let prev_page_key = null;

  function aosInit() {
    // console.log('aosInit');

    // https://github.com/michalsnik/aos
    AOS.init({
      // disable : function () {
      //   // 1280 미만일 때 disable
      //   return window.innerWidth < 1280;
      // },
      duration: 300,
      easing: 'ease-out-cubic',
      // anchorPlacement : 'center-bottom',
    });

    document.addEventListener('aos:in', ({ detail }) => {
      // console.log('animated in', detail);
    });

    document.addEventListener('aos:out', ({ detail }) => {
      // console.log('animated out', detail);
    });
  }

  useEffect(() => {
    // mount
    // window.history.scrollRestoration = 'manual';

    EnterFrame.initAccordion();
    EnterFrame.SyncHeight();

    Util.addOnClassByUrlParam(router);

    // mount 가장 끝에 위치
    // Layout Shift 방지를 위해
    // 가릴것 가리고 준비 되면 body On
    document.body.classList.add('On');

    Util.checkPrevScrollTop();

    aosInit();

    /* 2023-04-18 :: START ::  KSM : 페이지 복귀 시에 스크롤 유지 */
    const handleStart = (url) => {
      const page_key = document.documentElement.getAttribute(`data-page-key`);

      const st = window.pageYOffset || document.documentElement.scrollTop;

      const scroll_save_key = `__next_scroll_${page_key}__`;
      window.sessionStorage.setItem(scroll_save_key, st);
    };

    const handleStop = (url) => {
      // console.log('handleStop');
      const page_key = document.documentElement.getAttribute(`data-page-key`);

      const scroll_save_key = `__next_scroll_${page_key}__`;

      const scroll_y = parseInt(window.sessionStorage.getItem(scroll_save_key) || 0);
      window.scrollTo({ top: scroll_y });
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    /* // 2023-04-18 :: END :: KSM : 페이지 복귀 시에 스크롤 유지 */

    return () => {
      // unmount
      // console.log('unmount');
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, []);

  useEffect(() => {
    // update
    const handlerResize = Util.viewportSync();

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  });

  useEffect(() => {
    // mount
    // console.log('_app.js mount');

    const callbackScroll = (evt) => {
      //Util.checkSticky(`#Gnb`);

      const el_target = document.querySelectorAll('.StickyBox');
      if (el_target.length > 0) {
        el_target.forEach((el, idx) => {
          checkSticky(el);
        });

        /**
         * .StickyBox > .Shell 의 DOM 규칙을 갖고
         * .StickyBox 의 data-sticky-offset 의 값을 읽어와서 Sticky 처리함
         * @param target
         */
        function checkSticky(target) {
          const shell = target.querySelector(`:scope > .Shell`);
          if (!shell) return;

          const y = target.getBoundingClientRect().y;
          let offset = parseInt(target.getAttribute(`data-sticky-offset`));
          if (isNaN(offset)) offset = 0;

          if (y >= offset) {
            target.classList.remove('Sticky');
            shell.style.removeProperty('position');
            shell.style.removeProperty('top');
          } else {
            target.classList.add('Sticky');
            shell.style.setProperty('position', 'fixed');
            shell.style.setProperty('top', `${offset}px`);
          }
        }
      }
    };
    Util.on(window, 'scroll', callbackScroll);
    callbackScroll();

    return () => {
      // unmount
      // console.log('_app.js unmount');
      Util.off(window, 'scroll', callbackScroll);
    };
  }, []);

  return (
    <>
      {/*<MemberCheck />*/}
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
        />
        {/*favicon*/}
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon/favicon-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicon/favicon-512x512.png' />
        <link rel='icon' href='/favicon/favicon.ico' />
      </Head>
      <AppInfo layoutName={LayoutName} />
      <DynamicLayout>
        <Component {...pageProps} />
      </DynamicLayout>
      <Script src='/js/common.js' beforeInteractive></Script>
      {/*<Script src="/js/eruda.js" beforeInteractive></Script>*/}
      {/*<Script src="/js/eruda_helper.js" beforeInteractive></Script>*/}
    </>
  );
}

// URL에 ? 매개변수 넘길때 에러 나지 않게 추가
// https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
App.getInitialProps = async (ctx) => {
  return { props: '' };
};

export default App;
