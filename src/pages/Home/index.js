import Banner from "components/Banner";
import styles from "./Home.module.css";
import Card from "components/Card";
import Title from "components/Title";
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/MatheusSamburski/cinetag-api/videos")
        .then(response => response.json())
        .then(dados => {
            setVideos(dados);
        })
    },[]);

    return (
        <>
            <Banner imagem="home" />
            <Title>
                <h1>Um lugar para guardar seus videos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>

        </>
    )
}

export default Inicio;