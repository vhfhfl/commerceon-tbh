import MainCover from '@/components/common/MainCover';

import FooterBasic4 from '@/layouts/FooterBasic4';
import FooterCollapse from '@/layouts/FooterCollapse';
import HeaderBasic6 from "@/layouts/HeaderBasic6";
import {PageTransition} from '@/layouts/layout_manager.js';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutBasic6({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderBasic6 />
        <AnimatePresence mode='wait'>
          <motion.main
            className={'PAGE-TRANSITION-WRAP'}
            key={router.route}
            initial={PageTransition.initial}
            animate={PageTransition.animate}
            transition={PageTransition.transition}
            exit={PageTransition.exit}>
            {children}
            <MainCover />
          </motion.main>
        </AnimatePresence>
        <FooterCollapse />
        <FooterBasic4 />
      </div>
    </>
  );
}

LayoutBasic6.Name = 'LayoutBasic6';
export default LayoutBasic6;
