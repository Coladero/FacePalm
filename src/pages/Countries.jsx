import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchCountries from "../components/SearchCountries";
import { getAllCountries } from "../services/api.services";

function Countries() {
  //*1.Line8, create the state for allCountries.
  const [allLeagues, setAllCountries] = useState(null);
  const navigate = useNavigate();

  //*2.Line12, create the useEffect.
  useEffect(() => {
    getAllLegues();
  }, []);
  //*3Line16,call the API and take the information.
  const getAllLegues = async () => {
    try {
      const getResponse = await getAllCountries("/countries");
      //    console.log(getResponse.data.data)
      setAllCountries(getResponse.data.data);
    } catch (err) {
      if (err) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };

  //*4Line31, make the loanding to make sure get the info and render.
  if (!allLeagues) {
    return <div>...Loading</div>;
  }

  const searchCountries = (searchQuery) => {
    const filterPlayer = allLeagues.filter((eachPlayer) => {
      return eachPlayer.name.startsWith(searchQuery);
    });
    setAllCountries(filterPlayer);
  };
  return (
    <div>
      <p className="text">Countries</p>
      <SearchCountries searchCountries={searchCountries} />
      {/* //*render eachCountry to the user */}
      {allLeagues.map((eachCountry) => {
        {
          /* console.log(eachCountry.id) */
        }
        return (
          <div className="container-Countries" key={eachCountry.name}>
            <Link className="link" to={`/countries/${eachCountry.id}/players`}>
              <img width="150px" src={eachCountry.image_path} alt="Country" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
