import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPlayerDetailsService } from '../services/api.services'
import AddPlayer from '../components/AddPlayer'


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
        const getResponse = await getPlayerDetailsService(id)
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
    const handleAdd = (e) =>{
        e.preventDefault()
        navigate(`/countries/add/${playerDetail.player_id}`)
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
        <AddPlayer playerDetail={playerDetail}/>

    </div>
  )
}

export default PlayerDetail