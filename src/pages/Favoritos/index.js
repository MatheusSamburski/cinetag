import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import { useFavoritoContext } from "context/Favoritos";
import styles from "./Favoritos.module.css";

function Favoritos() {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos" />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    );
}

export default Favoritos;