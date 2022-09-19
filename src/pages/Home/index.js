import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../components/Card/index";
import Versus from "../../assets/versus.png";
import "./styles.css";

function Home() {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const { data: players } = await api.get("/players");

      setPlayers([...players]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className="home">
      <section className="home__column--first">
        <div className="home__group">
          <div className="home__card">
            <Card player={players[0]} />
            <img className="icon--versus" src={Versus} alt="Versus" />
            <Card player={players[1]} />
          </div>
          <div className="home__card">
            <Card player={players[2]} />
            <img className="icon--versus" src={Versus} alt="Versus" />
            <Card player={players[3]} />
          </div>
        </div>
        <div className="home__group">
          <div className="home__card">
            <Card player={players[4]} />
            <img className="icon--versus" src={Versus} alt="Versus" />
            <Card player={players[5]} />
          </div>
          <div className="home__card">
            <Card player={players[6]} />
            <img className="icon--versus" src={Versus} alt="Versus" />
            <Card player={players[7]} />
          </div>
        </div>
      </section>
      <section className="home__column--second">
        <div className="home__group">
          <div className="home__card">
            <Card player={players[2]} />
            <img className="icon--versus" src={Versus} alt="Versus" />
            <Card player={players[3]} />
          </div>
        </div>
        <div className="home__group">
          <div className="home__card">
            <Card player={players[4]} />
            <img className="icon--versus" src={Versus} alt="Versus" />
            <Card player={players[5]} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
