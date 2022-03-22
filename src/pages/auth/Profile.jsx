import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getPlayersAll } from "../../services/auth.services";

function Profile() {
  //*Line7, useState for have the control.
  const [agendaPlayers, setAgendaPlayers] = useState(null);

  //*Line10, useEffect
  useEffect(() => {
    getAllAgenda();
  }, []);

  //*Line15, get all the players by user.
  const getAllAgenda = async () => {
    try {
      const getResponse = await getPlayersAll();
      // console.log(getResponse.data)
      setAgendaPlayers(getResponse.data);
    } catch {}
  };
  //*Line23, wait until the DB send the response.
  if (!agendaPlayers) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      {agendaPlayers.map((eachPlayer) => {
        {
          console.log(eachPlayer)
        }
        return (
          <div key={eachPlayer._id}>
            <form>
              <img width="50px" src={eachPlayer.image_path} alt="pic" />
              <h3>{eachPlayer.display_name}</h3>
              <label htmlFor="shooting">Shooting: </label>
              <span id="temp">{eachPlayer.shooting}</span>
              <input
                min="0"
                max="100"
                type="range"
                name="shooting"
                value={eachPlayer.shooting}
                readOnly
              />

              <label htmlFor="dribbling">Dribbling: </label>
              <span id="temp">{eachPlayer.dribbling}</span>
              <input
                type="range"
                name="dribbling"
                value={eachPlayer.dribbling}
                readOnly
              />

              <label htmlFor="running">Running: </label>
              <span id="temp">{eachPlayer.running}</span>
              <input
                type="range"
                name="running"
                value={eachPlayer.running}
                readOnly
              />

              <label htmlFor="ballControl">Ball Control: </label>
              <span id="temp">{eachPlayer.ballControl}</span>
              <input
                type="range"
                name="ballControl"
                value={eachPlayer.ballControl}
                readOnly
              />

              <NavLink to={`/countries/${eachPlayer._id}/edit`}>
                <button>Edit</button>
              </NavLink>
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
