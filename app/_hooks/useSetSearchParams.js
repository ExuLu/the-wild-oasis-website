import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const useSetSearchParams = (filterName) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilterValue = searchParams.get(filterName);

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set(filterName, filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { currentFilterValue, handleFilter };
};

export default useSetSearchParams;
