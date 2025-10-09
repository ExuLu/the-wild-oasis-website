import Image from 'next/image';

function SignInButton() {
  return (
    <button className='flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
      <Image
        alt='Google logo'
        height='24'
        src='https://authjs.dev/img/providers/google.svg'
        width='24'
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
