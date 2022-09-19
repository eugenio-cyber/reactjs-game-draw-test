import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../components/Card/index";
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
      <Card player={players[0]} />
    </div>
  );
}

export default Home;
