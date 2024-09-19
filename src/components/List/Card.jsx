import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import Img from "./Img";
import Paragraph from "./Paragraph";

export default function Card({ children, id }) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <Link to={`/detail/${id}`}>
        <div className={styles.card_custom}>{children}</div>
      </Link>
    </div>
  );
}

Card.Img = Img;
Card.Paragraph = Paragraph;
