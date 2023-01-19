import { useFavoritoContext } from "context/Favoritos";
import styles from "./Card.module.css";
import IconeFavoritar from "./favoritar.png";
import IconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const favoritado = favorito.some((fav) => fav.id === id);
    const icone = !favoritado ? IconeFavoritar : IconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa });
                }} />
        </div>
    );
}

export default Card;