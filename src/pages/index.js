// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from '@next/font/google';
// import { animated, useSpring } from 'react-spring';

// //img
// import deer1 from '../../public/deer1.png';
// import Deer from '@/components/Deer';
// import ProgressBar from '@/components/ProgressBar';

// const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   const [springs, api] = useSpring(() => ({
//     from: { x: 0 },
//   }));

//   const handleClick = () => {
//     api.start({
//       from: { x: 0 },
//       to: { x: 300 },
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Animals passing by</title>
//         <meta name='description' content='Watch the animals passing by...' />
//         <meta name='viewport' content='width=device-width, initial-scale=1' />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>

//       <main>
//         {/* <div className='box'></div> */}
//         <div
//           className='box'
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//           }}
//         >
//           <animated.div
//             style={{
//               width: 80,
//               height: 80,
//               background: '#ff6d6d',
//               borderRadius: 8,
//               ...springs,
//             }}
//             onClick={handleClick}
//           />
//         </div>
//         <div className='box'></div>
//         <div className='box'></div>
//         <div className='box'></div>
//         <div className='box'></div>
//       </main>
//     </>
//   );
// }

//FRAMER MOTION:::
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

//img
import deer1 from '../../public/deer1.png';
import Deer from '@/components/Deer';
import ProgressBar from '@/components/ProgressBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  //page scroll progress:
  const { scrollYProgress: pageYProgress } = useScroll();
  //box2 progress:
  const box2Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: box2Ref,
    offset: ['0 1', '1 0'],
  });
  //box3 progress:
  const box3Ref = useRef(null);
  const { scrollYProgress: box3YP } = useScroll({
    target: box3Ref,
    // offset: [''],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest);
  });
  console.log(scrollYProgress);

  // if (global.window) {
  //   const winWidth = window.innerWidth;
  //   const winHeight = window.innerHeight;
  // }

  return (
    <>
      <Head>
        <title>Animals passing by</title>
        <meta name='description' content='Watch the animals passing by...' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <ProgressBar pageYProgress={pageYProgress} />
        <div className='box'></div>
        <div
          className='box'
          ref={box2Ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.2, 1], ['-20vw', '100vw']),
              scale: useTransform(scrollYProgress, [0, 1], [0.2, 0.98]),
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.2, 1], ['-80vw', '100vw']),
              scale: useTransform(scrollYProgress, [0, 1], [0.2, 0.98]),
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ['-200vw', '100vw']),
              width: 'fit-content',
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.p
            style={{
              marginTop: useTransform(scrollYProgress, [0, 1], [100, 1]),
              float: 'left',
            }}
          >
            walking together
          </motion.p>
        </div>
        <div
          className='box'
          ref={box3Ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <motion.div
            style={{
              x: useTransform(box3YP, [0, 1], ['-200vw', '100vw']),
              width: 'fit-content',
              rotateY: 180,
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
        </div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </main>
    </>
  );
}
