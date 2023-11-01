import Thumb from '../../components/Thumb/Thumb'
import Data from '../../data/logements.json'
import Banner from '../../components/Banner/Banner'
import '../Home/Home.scss'


export default function Home() {

    return (
      <main>  
         <div className='home'>
            
            <Banner title={"Chez vous, partout et ailleurs "} />
            <div className='array'>
              
            {Data.map(appart => <Thumb key={appart.id} appart={appart} />)}
            
            </div>
            
         </div>
        </main>
    )
}