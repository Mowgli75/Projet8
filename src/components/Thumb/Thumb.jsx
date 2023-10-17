import { Link } from 'react-router-dom'
import '../Thumb/Thumb.scss'

export default function Thumb(props) {
    const {appart} = props
    
    return (
        <Link to={`/logement/${appart.id}`}>        
        <div> 
        <img src={appart.cover} alt={appart.title} style={{width: '100%', height: "340px", objectFit: 'cover', borderRadius: '5%', padding:'0'}}/>
       <div className='appart-title'>{appart.title}</div> 
        </div>
        </Link>

    )
}
