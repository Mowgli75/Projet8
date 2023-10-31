import './banner.scss';
import imgHome from '../assets/banner.png'
import imgAbout from '../assets/banner-about.png'

export default function Banner({ aboutPage = false}) {

    
    return (
        <img  src={aboutPage ? imgAbout : imgHome} alt="banniere" />
    )
}