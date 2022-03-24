import { Button, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getPlayersAllService } from "../../services/profile.service";

function Profile() {
  //*Line7, useState for have the control.
  const [agendaPlayers, setAgendaPlayers] = useState(null);
  const navigate = useNavigate()
  //*Line10, useEffect
  useEffect(() => {
    getAllAgenda();
  }, []);

  //*Line15, get all the players by user.
  const getAllAgenda = async () => {
    try {
      const getResponse = await getPlayersAllService();
      // console.log(getResponse.data)
      setAgendaPlayers(getResponse.data);
    } catch {
      navigate("/error")
    }
  };

  //*Line26, wait until the DB send the response.
  if (!agendaPlayers) {
    return <div>...Loading</div>;
  }

  return (
    <div>
    <div className="btn-agenda">
    <h1>Profile</h1>
    </div>
    <div className="container-perfil">
      <p>Name: Profile</p>
      <p>Surname: Surprofile</p>
    </div>
    <h1>Agenda</h1>
      {agendaPlayers.map((eachPlayer) => {
          {/* console.log(eachPlayer) */}
        return (
          <div className="table" key={eachPlayer._id}>
            <form  className="container">
              <img width="50px" src={eachPlayer.image_path} alt="pic" />
              <h3>{eachPlayer.display_name}</h3>
              <label htmlFor="shooting">Shooting: </label>
              <span id="temp">{eachPlayer.shooting}</span>
              <Slider
                  valueLabelDisplay="auto"
                  step={1}
                  min={0}
                  max={100}
                  disabled
                  name="shooting"
                  value={eachPlayer.shooting}
              />
              <label htmlFor="dribbling">Dribbling: </label>
              <span id="temp">{eachPlayer.dribbling}</span>
              <Slider
               valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disabled
                name="dribbling"
                value={eachPlayer.dribbling}
                readOnly
              />
              <label htmlFor="running">Running: </label>
              <span id="temp">{eachPlayer.running}</span>
              <Slider
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disabled
                name="running"
                value={eachPlayer.running}
                readOnly
              />
              <label htmlFor="ballControl">Ball Control: </label>
              <span id="temp">{eachPlayer.ballControl}</span>
              <Slider
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disabled
                name="ballControl"
                value={eachPlayer.ballControl}
                readOnly
              />
              <NavLink className="profile-btn" to={`/countries/${eachPlayer._id}/edit`}>Edit</NavLink>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
