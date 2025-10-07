import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import Cabin from '@/app/_components/Cabin';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';

import { getCabin, getCabins } from '@/app/_lib/data-service';

export const generateMetadata = async ({ params }) => {
  const { cabinId } = await params;

  return { title: `Cabin ${cabinId}` };
};

export const generateStaticParams = async () => {
  const cabins = await getCabins();
  const cabinIds = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return cabinIds;
};

const Page = async ({ params }) => {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin) notFound();

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Cabin cabin={cabin} />

      <div>
        <h2 className='text-5xl font-semibold text-center mb-10 text-accent-400'>
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
