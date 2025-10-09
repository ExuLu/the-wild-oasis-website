import { auth } from '../_lib/auth';
import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import DateSelector from './DateSelector';
import LoginMessage from './LoginMessage';
import ReservationForm from './ReservationForm';

const Reservation = async ({ cabin }) => {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <div className='grid grid-cols-2 border border-primary-800 min-h-[400px]'>
      <DateSelector
        bookedDates={bookedDates}
        cabin={cabin}
        settings={settings}
      />
      {session?.user ? <ReservationForm cabin={cabin} /> : <LoginMessage />}
    </div>
  );
};

export default Reservation;
