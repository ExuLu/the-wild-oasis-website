'use server';

import { auth, signIn, signOut } from './auth';

export const updateGuest = async (formData) => {
  const session = await auth();

  if (!session) throw Error('You must be logged in');

  const nationalID = formData.get('nationalID');
  const nationalityData = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error('Please, provide valid national ID');
  }
};

export const signInAction = async () => {
  await signIn('google', { redirectTo: '/account' });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: '/' });
};
