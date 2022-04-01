import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePlayerService, updatePlayerService } from "../services/players.service";
import "../css/Edit.css"

function EditPlayer() {
  
  const [shooting, setShooting] = useState("");
  const [dribbling, setDribbling] = useState("");
  const [running, setRunning] = useState("");
  const [ballControl, setBallControl] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const handleShooting = (e) => setShooting(e.target.value);
  const handleDribbling = (e) => setDribbling(e.target.value);
  const handleRunning = (e) => setRunning(e.target.value);
  const handleBallControl = (e) => setBallControl(e.target.value);

  useEffect((e) => {
    getAndUpdatePlayer();
  }, []);

  const getAndUpdatePlayer = async () => {
    try {
      const response = await updatePlayerService(id);
      setShooting(response.data.shooting);
      setDribbling(response.data.dribbling);
      setRunning(response.data.running);
      setBallControl(response.data.ballControl);
    } catch {
      navigate("/error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePlayerService(id, {
        shooting,
        dribbling,
        running,
        ballControl,
      });
      navigate("/profile");
    } catch {
      navigate("/error");
    }
  };

  const handleDelete = async () => {
    try {
      await deletePlayerService(id);
      navigate("/");
    } catch (err) {
      navigate("/error");
    }
  };
  return (
    <div>
      <h1>Edit</h1>
      <form className="form-edit" onSubmit={handleSubmit}>
      <div className="container-edit">

        <label htmlFor="shooting">Shooting: {shooting} </label>
        <Slider
          step={1}
          min={0}
          max={100}
          name="shooting"
          value={shooting}
          onChange={handleShooting}
        />
        <label htmlFor="dribbling">Dribbling: {dribbling} </label>
        <Slider
          step={1}
          min={0}
          max={100}
          name="dribbling"
          value={dribbling}
          onChange={handleDribbling}
        />
        <label htmlFor="running">Running: {running} </label>
        <Slider
          step={1}
          min={0}
          max={100}
          name="running"
          value={running}
          onChange={handleRunning}
        />
        <label htmlFor="ballControl">Ball control: {ballControl} </label>
        <Slider
          step={1}
          min={0}
          max={100}
          name="ballControl"
          value={ballControl}
          onChange={handleBallControl}
        />
        <div className="btn-player-edit">
        <button>Change</button>
        </div>
        <div className="btn-player-edit">
        <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default EditPlayer;
