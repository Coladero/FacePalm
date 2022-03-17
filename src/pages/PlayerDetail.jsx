import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function PlayerDetail() {
    const [playerDetail, setPlayerDetail] = useState(null)
    const {id} = useParams()
    // console.log(id)
    const navigate = useNavigate()

    useEffect(()=>{
        getPlayerDetail()
    },[])

    const getPlayerDetail = async () =>{ 
        try{
        const getResponse = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/${id}?api_token=vzIbCXwEDJcjlzJWVJP0qdaHhs9quZrZyA8RczV9vdggbIn4HSF9lvo8ZQS2`)
        // console.log(getResponse.data.data)
            setPlayerDetail(getResponse.data.data)
        }catch(err){
            if(err.getResponse){
                navigate("/login")
            }else{
                navigate("/error")
            }
        }
    }
    
    if(!playerDetail){
        return <div>...Loanding</div>
    }
  return (
    <div className='Container'>
    <div className='player'>
        <img src={playerDetail.image_path} alt={playerDetail.common_name} />
        <h1>{playerDetail.common_name}</h1>
    </div>
        <div className='player-Detail'>
            <p><strong>Nacionality:</strong>  {playerDetail.birthcountry}</p>
            <p><strong>Birthday place:</strong> {playerDetail.birthplace}</p>
            <p><strong>Birthday:</strong> {playerDetail.birthdate}</p>
            <p><strong>Firstname:</strong> {playerDetail.firstname}</p>
            <p><strong>Lastname:</strong> {playerDetail.lastname}</p>
            <p><strong>Height:</strong> {playerDetail.height}</p>
            <p><strong>Weight:</strong> {playerDetail.weight}</p>
        </div>

        <form>
            <button>Add to your Agenda</button>
        </form>
        
    </div>
  )
}

export default PlayerDetail