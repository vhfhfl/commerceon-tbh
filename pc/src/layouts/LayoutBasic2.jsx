import MainCover from '@/components/common/MainCover';

import FooterBasic from "@/layouts/FooterBasic";
import HeaderBasic2 from '@/layouts/HeaderBasic2';
import {PageTransition} from '@/layouts/layout_manager.js';
import FloatingUtil from "@/modules/FloatingUtil";

import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

function LayoutBasic2({ children }) {
  const router = useRouter();

  // --header-logo-bar-hei
  // --gnb-hei
  return (
    <>
      <div id='page'>
        <HeaderBasic2 />
        <FloatingUtil />
        <AnimatePresence mode='wait'>
          <motion.main
            className={'PAGE-TRANSITION-WRAP -mt-[calc(var(--header-logo-bar-hei)+var(--gnb-hei))]'}
            key={router.route}
            initial={PageTransition.initial}
            animate={PageTransition.animate}
            transition={PageTransition.transition}
            exit={PageTransition.exit}>
            {children}
            <MainCover />
          </motion.main>
        </AnimatePresence>
        <FooterBasic />
      </div>
    </>
  );
}

LayoutBasic2.Name = 'LayoutBasic2';
export default LayoutBasic2;
