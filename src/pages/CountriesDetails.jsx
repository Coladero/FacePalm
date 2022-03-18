import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getAllPlayers } from '../services/api.services'

function CountriesDetails() {
    //*1.Line7, create the state for Players.
    const [detailLeague, setDetailLeague] = useState(null)
    const {id} = useParams()
    // console.log(id)
    
    const navigate = useNavigate()
    //*2.Line11, create the useEffect.
    useEffect(()=>{
        getDetailLeague()
    },[])
    //*3Line16,call the API and take the information.
    const getDetailLeague = async ()=>{
        try{
            const getResponse = await getAllPlayers(id)
            // console.log("Adios",getResponse.data.data)
            setDetailLeague(getResponse.data.data)
        }catch(err){
            if(err.getResponse){
                navigate("/login")
            }else{
                navigate("/error")
            }
        }
 
    }
    //*4Line31, make the loanding to make sure get the info and render.
    if(!detailLeague){
        return <div>...Loading</div>
    }
  return (
    <div>
        <p className='text'>Players</p>
        <div>
        {/* //*Line39, render eachPlayer to the user */}
        {detailLeague.map((eachPlayer)=>{
            {/* console.log(eachPlayer) */}
            return(
                <div className='container2' key={eachPlayer.player_id}>
                <div className='container-player'>
                <button className='btn-players'>
                <NavLink to={`/countries/${eachPlayer.player_id}/players/details`}>
                <img src={eachPlayer.image_path} alt="Player" />
                </NavLink>
                </button>
                </div>
                <div>
                   <p className='link'>{eachPlayer.fullname}</p>
                </div>
                </div>
                

            )
        })}
        </div>
    </div>
  )
}

export default CountriesDetails