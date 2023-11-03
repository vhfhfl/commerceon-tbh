import MainCover from '@/components/common/MainCover';

import FooterBasic from '@/layouts/FooterBasic';
import FooterCollapse from "@/layouts/FooterCollapse";
import HeaderBasic2 from '@/layouts/HeaderBasic2';
import {PageTransition} from '@/layouts/layout_manager.js';

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutBasic2({ children }) {
  const router = useRouter();

  return (
    <>
      <div id='page'>
        <HeaderBasic2 />
        <AnimatePresence mode='wait'>
          <motion.main
            className={'PAGE-TRANSITION-WRAP mt-[-100px]'}
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
        <FooterBasic />
      </div>
    </>
  );
}

LayoutBasic2.Name = 'LayoutBasic2';
export default LayoutBasic2;
