import { useParams } from "react-router";
import Data from "../../data/logements.json";
import Error404 from "../Error404/Error404";
import "../Logement/Logement.scss";
import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import StarFull from "../../components/assets/etoilePleine.png"
import StarEmpty from "../../components/assets/etoileVide.png"

const Logement = () => {
  const { id } = useParams();
  function generateStarRating(rating) {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starArray.push(
                <i key={i} className="starFull"><img src={StarFull} alt="étoile pleine" /></i> 
            );
        } else {
            starArray.push(
                <i key={i} className="starEmpty"><img src={StarEmpty} alt="étoile vide" /></i> 
            );
        }
    }
    return starArray;
}
  // Recherchez le logement correspondant à l'ID dans vos données
  const logement = Data.find((appart) => appart.id === id);

  if (!logement) {
    return (
      <div>
        <Error404 />
      </div>
    );
  }

  return (
    <section className="logement-container">
      <div>
        <Carrousel />
        {/* <img src={logement.cover} alt={logement.title} /> */}
      </div>
      <div className="hebergement-container">
      <div>
        <h2>{logement.title}</h2>
        <h4>{logement.location}</h4>
        <div className="logement-tags">
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="logement-host">
          {logement.host.name}
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
        <div className="logement-rating">
          <span>{generateStarRating(logement.rating)}</span>
        </div>
      </div>
      </div>
      <div className="logement-collapse">
        <Collapse title={`Description`} content={logement.description} />
        <Collapse
          title={`Equipements`}
          content={logement.equipments.map((equipments, index) => (
            <li key={index}>{equipments}</li>
          ))}
        />
      </div>
    </section>
  );
};

export default Logement;
