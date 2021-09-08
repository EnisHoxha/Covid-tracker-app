import React from "react";
import { fetchCountries } from "./api";
import { useState, useEffect } from "react";

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  //   console.log(fetchedCountries);
  return (
    <>
      <div className="">
        <select
          name=""
          id=""
          defaultValue=""
          className="mx-auto"
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          {/* po e la si opsion total te infektuar edhe value = " " per arsye se e shfaq gjendjen fillestare nese mbrenda value vendosi najsen po qet error se nuk ka ku me gjet psh qat value se na api ja qojna shtetin si parameter */}
          <option value="">World</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CountryPicker;
