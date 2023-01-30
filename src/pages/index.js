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
  useSpring,
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
    offset: ['0 1', '1 0'],
  });
  //box4 progress:
  const box4Ref = useRef(null);
  const { scrollYProgress: box4YP } = useScroll({
    target: box4Ref,
    offset: ['0.5 1', '0.5 0.5'],
  });
  //box5 progress:
  const box5Ref = useRef(null);
  const { scrollYProgress: box5YP } = useScroll({
    target: box5Ref,
    offset: ['0.5 1', '0.5 0.5', '1 0'],
  });
  //box6 progress
  const box6Ref = useRef(null);
  const { scrollYProgress: box6YP } = useScroll({
    target: box6Ref,
    offset: ['0 1', '1 0'],
  });
  //box7 progress
  const box7Ref = useRef(null);
  const { scrollYProgress: box7YP } = useScroll({
    target: box7Ref,
    offset: ['0 1', '1 0'],
  });
  //box8 progress
  const box8Ref = useRef(null);
  const { scrollYProgress: box8YP } = useScroll({
    target: box8Ref,
    offset: ['0 1', '1 0'],
  });
  //box9 progress
  const box9Ref = useRef(null);
  const { scrollYProgress: box9YP } = useScroll({
    target: box9Ref,
    offset: ['0 1', '1 0'],
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
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.2, 1], ['-40vw', '100vw']),
              scale: useSpring(
                useTransform(scrollYProgress, [0, 1], [0.2, 0.98])
              ),
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0.2, 1], ['-80vw', '100vw']),
              scale: useSpring(
                useTransform(scrollYProgress, [0, 1], [0.2, 0.98])
              ),
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ['-200vw', '100vw']),
              width: 'fit-content',
              scale: useSpring(
                useTransform(scrollYProgress, [0, 1], [0.2, 0.98])
              ),
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(
                scrollYProgress,
                [0, 1],
                ['#000', 'rgb(0,0,222)']
              ),
              top: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              left: useTransform(scrollYProgress, [0, 1], ['-10%', '100%']),
              scale: useSpring(useTransform(scrollYProgress, [0, 1], [1, 3])),
              position: 'absolute',
            }}
          >
            gathering
          </motion.div>
        </div>
        <div
          className='box'
          ref={box3Ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              x: useTransform(box3YP, [0, 1], ['100vw', '-150vw']),
              width: 'fit-content',
              rotateY: 180,
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(box3YP, [0, 1], ['#000', 'rgb(0,0,222)']),
              top: useTransform(box3YP, [0, 1], ['0%', '100%']),
              left: useTransform(box3YP, [0, 1], ['-20%', '100%']),
              scale: useTransform(box3YP, [0, 1], [1, 3]),
              position: 'absolute',
            }}
            transition={{ type: 'spring' }}
          >
            coming back in a hurry
          </motion.div>
        </div>
        <motion.div
          className='box'
          ref={box4Ref}
          style={{
            display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            gap: useTransform(box4YP, [0, 1], ['100%', '0%']),
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              // x: useTransform(box4YP, [0, 1], ['0vw', '45vw']),
              // originX: 0,
              width: 'fit-content',
              rotateY: 180,
              // display: 'inline',
            }}
          >
            <img
              src='/tiger.png'
              className='tiger'
              alt='tiger'
              // style={{ display: 'inline' }}
            />
          </motion.div>
          <motion.div
            style={{
              // x: useTransform(box4YP, [0, 1], ['100vw', '45vw']),
              // originX: 0,
              width: 'fit-content',
              rotateY: 180,
              // display: 'inline',
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(box4YP, [0, 1], ['#000', 'rgb(0,0,222)']),
              top: useTransform(box4YP, [0, 1], ['0%', '110%']),
              left: useTransform(box4YP, [0, 1], ['-50%', '100%']),
              scale: useTransform(box4YP, [0, 1], [1, 3]),
              position: 'absolute',
            }}
            transition={{ type: 'spring' }}
          >
            meeting jaguat
          </motion.div>
        </motion.div>
        <motion.div
          className='box'
          ref={box5Ref}
          style={{
            display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            gap: useTransform(box5YP, [0, 1], ['0%', '100%']),
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              // x: useTransform(box5YP, [0, 1], ['24vw', '-20vw']),
              // originX: 0,
              width: 'fit-content',

              // display: 'inline',
            }}
          >
            <img src='/tiger.png' className='tiger' alt='tiger' style={{}} />
          </motion.div>
          <motion.div
            style={{
              // x: useTransform(box5YP, [0, 1], ['26vw', '90vw']),
              // originX: 0,
              width: 'fit-content',
              // rotateY: 180,
              // display: 'inline',
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(box5YP, [0, 1], ['#000', 'rgb(0,0,222)']),
              top: useTransform(box5YP, [0, 1], ['0%', '110%']),
              left: useTransform(box5YP, [0, 1], ['-50%', '100%']),
              scale: useTransform(box5YP, [0, 1], [1, 3]),
              position: 'absolute',
            }}
            transition={{ type: 'spring' }}
          >
            and going away
          </motion.div>
        </motion.div>
        <div
          className='box'
          ref={box6Ref}
          style={{
            display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: useTransform(box5YP, [0, 1], ['0%', '100%']),
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              scale: useTransform(box6YP, [0, 1], [0, 3]),
              // originX: 0,
              width: 'fit-content',
              // rotateY: 180,
              // display: 'inline',
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(box6YP, [0, 1], ['#000', 'rgb(0,0,222)']),
              top: useTransform(box6YP, [0, 1], ['0%', '110%']),
              left: useTransform(box6YP, [0, 1], ['-50%', '100%']),
              scale: useTransform(box6YP, [0, 1], [1, 3]),
              position: 'absolute',
            }}
            transition={{ type: 'spring' }}
          >
            growing
          </motion.div>
        </div>
        <div
          className='box'
          ref={box7Ref}
          style={{
            display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: useTransform(box5YP, [0, 1], ['0%', '100%']),
            position: 'relative',
            // overflow: 'visible',
          }}
        >
          <motion.div
            style={{
              scale: useTransform(box7YP, [0, 1], [0, 10]),
              // originX: 0,
              width: 'fit-content',
              // rotateY: 180,
              // display: 'inline',
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(box7YP, [0, 1], ['#000', 'rgb(0,0,222)']),
              top: useTransform(box7YP, [0, 1], ['0%', '110%']),
              left: useTransform(box7YP, [0, 1], ['-50%', '100%']),
              scale: useTransform(box7YP, [0, 1], [1, 3]),
              position: 'absolute',
            }}
            transition={{ type: 'spring' }}
          >
            grooooowing
          </motion.div>
        </div>
        <div
          className='box'
          ref={box8Ref}
          style={{
            display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: useTransform(box5YP, [0, 1], ['0%', '100%']),
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <motion.div
            style={{
              scale: useTransform(box8YP, [0, 1], [0, 13]),
              // originX: 0,
              width: 'fit-content',
              // rotateY: 180,
              // display: 'inline',
            }}
          >
            <img src='/deer1.png' alt='deer' />
          </motion.div>
          <motion.div
            className='legend'
            style={{
              color: useTransform(box8YP, [0, 1], ['#000', 'rgb(0,0,222)']),
              top: useTransform(box8YP, [0, 1], ['0%', '110%']),
              left: useTransform(box8YP, [0, 1], ['-50%', '100%']),
              scale: useTransform(box8YP, [0, 1], [1, 3]),
              position: 'absolute',
            }}
            transition={{ type: 'spring' }}
          >
            grooooooooowing oh fuck
          </motion.div>
        </div>
        <div className='box'></div>

        <div className='box'></div>
        <div className='box'></div>
      </main>
    </>
  );
}
