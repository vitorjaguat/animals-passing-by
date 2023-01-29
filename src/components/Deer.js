import React from 'react';
import { motion } from 'framer-motion';
import deer1 from '../../public/deer1.png';
import Image from 'next/image';

export default function Deer() {
  return (
    <div>
      <Image src={deer1} height={130} width={130} alt='deer' />
    </div>
  );
}
