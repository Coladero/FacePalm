import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SearchPlayer from "../components/SearchPlayer";
import { getAllPlayersService } from "../services/api.services";

function CountriesDetails(props) {
  //*1.Line7, create the state for Players.
  const [detailLeague, setDetailLeague] = useState(null);
  const [detailLeagueToRender, setDetailLeagueToRender] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  //*2.Line11, create the useEffect.
  useEffect(() => {
    getDetailLeague();
  }, []);
  //*3Line16,call the API and take the information.
  const getDetailLeague = async () => {
    try {
      const getResponse = await getAllPlayersService(id);
      setDetailLeagueToRender(getResponse.data.data);
      setDetailLeague(getResponse.data.data)
    } catch (err) {
      if (err.getResponse) {
        navigate("/login");
      } else {
        navigate("/error");
      }
    }
  };
  //*4Line31, make the loanding to make sure get the info and render.
  if (!detailLeagueToRender || !detailLeague) {
    return <div>...Loading</div>;
  }
  //*5Line37, now we can make the player's search and show the result.
  const searchPlayers = (searchQuery) => {
    const filteredPlayer = detailLeague.filter((eachPlayer) => {
      return eachPlayer.fullname.toLowerCase().includes(searchQuery);
    });
    setDetailLeagueToRender(filteredPlayer);
  };
  return (
    <div>
      <p className="text">Players</p>
      <div>
        <SearchPlayer searchPlayers={searchPlayers} />
        {/* //*Line39, render eachPlayer to the user */}
        {detailLeagueToRender.map((eachPlayer) => {
          return (
            <div className="container2" key={eachPlayer.player_id}>
              <div className="container-player">
                  <NavLink
                    to={`/countries/${eachPlayer.player_id}/players/details`}
                  >
                    <img className="img" margin="2%" width="50px" height="50px" src={eachPlayer.image_path} alt={eachPlayer.fullname} />
                  </NavLink>
              </div>
              <div>
                <p className="link">{eachPlayer.fullname}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesDetails;
