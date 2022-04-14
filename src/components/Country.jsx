import { Link } from 'react-router-dom'

function Country(props) {
    const { id, image_path, name} = props.eachCountryProps

    return (
    <div>
     <Link className="link" to={`/countries/${id}/players`}>
        <img width="110px" height="70px" src={image_path} alt={name} />
    </Link>

    </div>
  )
}

export default Country