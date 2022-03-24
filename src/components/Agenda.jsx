import { Slider } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Agenda(props) {
    // console.log(props)
    const { _id, image_path, display_name, shooting, dribbling, running, ballControl } = props.eachPlayerProps
  return (
    <div>
        <form  className="container">
              <img width="50px" src={image_path} alt="pic" />
              <h3>{display_name}</h3>
              <label htmlFor="shooting">Shooting: </label>
              <span id="temp">{shooting}</span>
              <Slider
                  valueLabelDisplay="auto"
                  step={1}
                  min={0}
                  max={100}
                  disabled
                  name="shooting"
                  value={shooting}
              />
              <label htmlFor="dribbling">Dribbling: </label>
              <span id="temp">{dribbling}</span>
              <Slider
               valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disabled
                name="dribbling"
                value={dribbling}
                readOnly
              />
              <label htmlFor="running">Running: </label>
              <span id="temp">{running}</span>
              <Slider
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disabled
                name="running"
                value={running}
                readOnly
              />
              <label htmlFor="ballControl">Ball Control: </label>
              <span id="temp">{ballControl}</span>
              <Slider
                valueLabelDisplay="auto"
                step={1}
                min={0}
                max={100}
                disabled
                name="ballControl"
                value={ballControl}
                readOnly
              />
              <NavLink className="profile-btn" to={`/countries/${_id}/edit`}>Edit</NavLink>
            </form>
    </div>
  )
}

export default Agenda