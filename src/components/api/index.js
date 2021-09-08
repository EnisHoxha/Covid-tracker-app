import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSpecificCountries = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    // console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
