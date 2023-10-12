import { Link } from 'react-router-dom'
import '../Thumb/Thumb.scss'

export default function Thumb(props) {
    const {appart} = props
    
    return (
        <Link to={`/logement/${appart.id}`}>        
        <div> 
        <img src={appart.cover} alt={appart.title} style={{width: '350px', height: "340px", objectFit: 'cover', borderRadius: '10%'}}/>
       <div className='appart-title'>{appart.title}</div> 
        </div>
        </Link>

    )
}
