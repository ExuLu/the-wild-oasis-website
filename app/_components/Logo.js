import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <Image
        alt='The Wild Oasis logo'
        height='60'
        quality={100}
        src={logo}
        width='60'
      />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
  );
};

export default Logo;
