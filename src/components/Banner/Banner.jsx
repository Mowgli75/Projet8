import './banner.scss';
import imgHome from '../assets/banner.png'
import imgAbout from '../assets/banner-about.png'

export default function Banner({ aboutPage = false, title = null}) {

    
    return (
        <header className='banner'>
        <img  src={aboutPage ? imgAbout : imgHome} alt="banniere" />
            {title && <h2>{title}</h2>}
        </header>
    )
}