import { getCountries } from '@/app/_lib/data-service';

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      className={className}
      defaultValue={`${defaultCountry}%${flag}`}
      id={id}
      name={name}
    >
      <option value=''>Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
