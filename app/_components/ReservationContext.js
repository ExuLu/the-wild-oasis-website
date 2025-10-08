'use client';

import { createContext, useContext } from 'react';

const ReservationContext = createContext();
const initialState = { from: undefined, to: undefined };

const ReservationProvider = ({ children }) => {
  const [range, setRange] = useState(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

const useReservation = () => {
  const context = useContext(ReservationContext);

  if (!context) throw new Error('Context was used outside provider');

  return context;
};

export { ReservationProvider, useReservation };
