'use client';

import { updateGuest } from '@/app/_lib/actions';
import UpdateProfileButton from './UpdateProfileButton';

const UpdateProfileForm = ({ children, guest }) => {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          defaultValue={fullName}
          disabled
          name='fullName'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
          defaultValue={email}
          disabled
          name='email'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img
            alt='Country flag'
            className='h-5 rounded-sm'
            src={countryFlag}
          />
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          defaultValue={nationalID}
          name='nationalID'
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <UpdateProfileButton />
      </div>
    </form>
  );
};

export default UpdateProfileForm;
