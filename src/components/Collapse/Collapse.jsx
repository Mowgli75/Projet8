import { useState } from "react";
import "./collapse.scss";
import fleche from "../assets/fleche.svg";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="collapse">
      <div className="collapse-title">
        <h2>{title}</h2>
        <span onClick={() => setIsOpen(!isOpen)}>
          <img className={isOpen ? 'open' : ''} src={fleche} alt="fleche" />
        </span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </section>
  );
}
