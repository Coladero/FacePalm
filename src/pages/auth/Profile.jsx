import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Agenda from "../../components/Agenda";
import { getPlayersAllService, getUserService } from "../../services/profile.service";

function Profile() {
  //*Line7, useState for have the control.
  const [agendaPlayers, setAgendaPlayers] = useState(null);
  const [users, setUser] = useState({})
  const navigate = useNavigate()
  //*Line10, useEffect
  useEffect(() => {
    getAllAgenda();
    getUser()
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

  const getUser = async () =>{
    try{
      const getResponse = await getUserService()
      setUser(getResponse.data)
    }catch{

    }
  }

  //*Line26, wait until the DB send the response.
  if (!agendaPlayers) {
    return <div>...Loading</div>;
  }
  if(!users){
    return <div>...Loading</div>
  }
  // console.log(users)
  return (
    <div>
    <div className="btn-agenda">
    <h1>{users.name} Profile</h1>
    </div>
    <div className="container-perfil">
      <p>Name: {users.name}</p>
      <p>Surname: {users.surname}</p>
    </div>
    <h1>Agenda</h1>
      {agendaPlayers.map((eachPlayer) => {
          {/* console.log(eachPlayer.user) */}
        return (
          <div className="table" key={eachPlayer._id}>
            <Agenda eachPlayerProps={eachPlayer}/>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
