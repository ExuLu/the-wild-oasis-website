'use client';

import useSetSearchParams from '@/app/_hooks/useSetSearchParams';
import { useSearchParams } from 'next/navigation';
import FilterButton from './FilterButton';

const Filter = () => {
  const { currentFilterValue, handleFilter } = useSetSearchParams('capacity');
  const activeFilter = currentFilterValue ?? 'all';
  const buttons = [
    { value: 'all', label: 'All cabins' },
    { value: 'small', label: '1 - 3 guests' },
    { value: 'medium', label: '4 - 7 guests' },
    { value: 'large', label: '8 - 12 guests' },
  ];

  return (
    <div className='border border-primary-800 flex'>
      {buttons.map((button) => (
        <FilterButton
          activeFilter={activeFilter}
          filter={button.value}
          handleFilter={handleFilter}
          key={button.value}
        >
          {button.label}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filter;
