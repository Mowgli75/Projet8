import Thumb from '../../components/Thumb/Thumb'
import Data from '../../data/logements.json'
import Banner from '../../components/Banner/Banner'
import '../Home/Home.scss'


export default function Home() {

console.log(Data)
    return (
      <main>  
         <div className='home'>
            
            <Banner />
            <div className='array'>
              
            {Data.map(appart => <Thumb key={appart.id} appart={appart} />)}
            
            </div>
            
         </div>
        </main>
    )
}