import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Country from "../components/Country";
import SearchCountries from "../components/SearchCountries";
import { getAllCountriesService } from "../services/api.services";

function Countries() {
  //*1.Line8, create the state for allCountries.
  const [allLeagues, setAllCountries] = useState([])
  const [allLeaguestoRender, setAllCountriesToRender] = useState([]);
  const navigate = useNavigate();

  //*2.Line12, create the useEffect.
  useEffect(() => {
    getAllLegues();
  }, []);
  //*3Line16,call the API and take the information.
  const getAllLegues = async () => {
    try {
      const getResponse = await getAllCountriesService("/countries");
      setAllCountriesToRender(getResponse.data.data);
      setAllCountries(getResponse.data.data)
    } catch (err) {
      if (err) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  //*4Line31, make the loanding to make sure get the info and render.
  if (!allLeaguestoRender ||!allLeagues) {
    return <div>...Loading</div>;
  }
  const searchCountries = (searchQuery) => {
    console.log(searchQuery)  
    const filterCountry = allLeagues.filter((eachCountries) => {
      return eachCountries.name.toLowerCase().includes(searchQuery);
    });
    setAllCountriesToRender(filterCountry);
    
  };

  return (
    <div>
      <p className="text">Countries</p>
      <SearchCountries searchCountries={searchCountries} />
      {/* //*render eachCountry to the user */}
      {allLeaguestoRender.map((eachCountry, index) => {
        console.log(eachCountry)
        return (
          <div className="container-Countries" key={eachCountry.name + index}>
          <Country  eachCountryProps={eachCountry}/>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
