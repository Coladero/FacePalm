import { Link } from 'react-router-dom'

function Country(props) {
    const { id, image_path} = props.eachCountryProps

    return (
    <div>
     <Link className="link" to={`/countries/${id}/players`}>
        <img width="150px" src={image_path} alt="Country" />
    </Link>

    </div>
  )
}

export default Country