import Image from 'next/image';
import Link from 'next/link';

import { auth } from '@/app/_lib/auth';

const Navigation = async () => {
  const session = await auth();
  console.log(session?.user?.image);

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            className='hover:text-accent-400 transition-colors'
            href='/cabins'
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            className='hover:text-accent-400 transition-colors'
            href='/about'
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              className='hover:text-accent-400 transition-colors flex items-center gap-4'
              href='/account'
            >
              <div className='h-8 relative w-8'>
                <Image
                  alt={session.user.name}
                  className='object-cover rounded-full'
                  fill
                  referrerPolicy='no-referrer'
                  src={session?.user?.image}
                />
              </div>
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              className='hover:text-accent-400 transition-colors'
              href='/account'
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
