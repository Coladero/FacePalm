//!import//
import { Slider } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPlayerandAddService } from "../services/players.service";
import "../css/Add.css"

function AddPlayer(props) {
  // console.log(props.playerDetail)

  //!Line9, useState
  const [player_id, setPlayer_id] = useState(props.playerDetail.player_id);
  const [display_name, setdDisplay_name] = useState(
    props.playerDetail.display_name
  );
  const [image_path, setImage_path] = useState(props.playerDetail.image_path);
  const [shooting, setShooting] = useState();
  const [dribbling, setDribbling] = useState();
  const [running, setRunning] = useState();
  const [ballControl, setBallControl] = useState();

  //!Line18, useParams
  const { id } = useParams();
  // console.log(Id)

  //!Line22, useNavigate
  const navigate = useNavigate();

  //*Line25, Here is the handle for the input to make sure everything is undercontrol.
  const handleShooting = (e) => setShooting(e.target.value);
  const handleDribbling = (e) => setDribbling(e.target.value);
  const handleRunning = (e) => setRunning(e.target.value);
  const handleBallControl = (e) => setBallControl(e.target.value);

  //*Line31, handle for submit the player with the details the user want.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPlayer = {
        player_id,
        display_name,
        image_path,
        shooting,
        dribbling,
        running,
        ballControl,
      };
      console.log(newPlayer);
      const response = await getPlayerandAddService(newPlayer, id);
      // console.log("hola",response)
      setShooting("");
      setDribbling("");
      setRunning("");
      setBallControl("");
      navigate("/profile", response);
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <div className="form-add">
      <form className="container-add" onSubmit={handleSubmit}>
        <label htmlFor="shooting">Shooting:</label>
        <Slider
        valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
          type="text"
          name="shooting"
          value={shooting}
          onChange={handleShooting}
        />
        <label htmlFor="dribbling">Dribbling:</label>
        <Slider
        valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
          type="text"
          name="dribbling"
          value={dribbling}
          onChange={handleDribbling}
        />
        <label htmlFor="running">Running:</label>
        <Slider
        valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
          type="text"
          name="running"
          value={running}
          onChange={handleRunning}
        />
        <label htmlFor="ballControl">Ball control:</label>
        <Slider
        valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
          type="text"
          name="ballControl"
          value={ballControl}
          onChange={handleBallControl}
        />
          <div className="btn-add-player">
        <button className="">Add to Agenda</button>
          </div>
      </form>
    </div>
  );
}

export default AddPlayer;
