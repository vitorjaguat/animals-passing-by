import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Animals passing by</title>
        <meta name='description' content='Watch the animals passing by...' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </main>
    </>
  );
}
