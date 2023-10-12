import { useParams } from "react-router"
import Data from '../../data/logements.json'
import Error404 from "../Error404/Error404";

const Logement = () => {
    const { id } = useParams();
  
    // Recherchez le logement correspondant à l'ID dans vos données
    const logement = Data.find(appart => appart.id === id);
  
    if (!logement) {
      // Gérez le cas où le logement n'est pas trouvé, par exemple, affichez un message d'erreur.
      return <div><Error404 /></div>;
    }
  
    return (
      <div className="logement-details">
       
        <img src={logement.cover} alt={logement.title} />
         <h2>{logement.title}</h2>
        <p>{logement.description}</p>
      </div>
    );
  };
  
  export default Logement;