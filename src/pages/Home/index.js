import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../components/Card/index";
import Versus from "../../assets/versus.png";
import "./styles.css";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const [players, setPlayers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const getPlayers = async () => {
    try {
      const { data: players } = await api.get("/players");

      setPlayers([...players]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleToggle();
    getPlayers();
    setTimeout(() => {
      handleClose();
    }, 2000);
  }, []);

  return (
    <div className="home">
      <Backdrop
        sx={{
          color: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "purple",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
        open={open}
      >
        <h2>Aguarde a definição dos jogos</h2>
        <CircularProgress color="inherit" />
      </Backdrop>

      {players.length && (
        <>
          <section className="home__column--first">
            <div className="home__group">
              <h1 className="home__title">Oitavas de Final</h1>
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
              <h1 className="home__title">Quartas de Final</h1>
              <div className="home__card">
                <Card player={players[1]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[2]} />
              </div>
            </div>
            <div className="home__group">
              <div className="home__card">
                <Card player={players[5]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[7]} />
              </div>
            </div>
          </section>
          <section className="home__column--center">
            <div className="home__group">
              <h1 className="home__title">Final</h1>
              <div className="home__card">
                <Card player={players[5]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[15]} />
              </div>
            </div>
            <div className="home__group">
              <h1 className="home__title">SemiFinal</h1>
              <div className="home__card">
                <Card player={players[2]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[5]} />
              </div>
              <div className="home__card">
                <Card player={players[8]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[15]} />
              </div>
            </div>
          </section>
          <section className="home__column--second">
            <div className="home__group">
              <h1 className="home__title">Quartas de Final</h1>
              <div className="home__card">
                <Card player={players[8]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[11]} />
              </div>
            </div>
            <div className="home__group">
              <div className="home__card">
                <Card player={players[13]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[15]} />
              </div>
            </div>
          </section>
          <section className="home__column--first">
            <div className="home__group">
              <h1 className="home__title">Oitavas de Final</h1>
              <div className="home__card">
                <Card player={players[8]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[9]} />
              </div>
              <div className="home__card">
                <Card player={players[10]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[11]} />
              </div>
            </div>
            <div className="home__group">
              <div className="home__card">
                <Card player={players[12]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[13]} />
              </div>
              <div className="home__card">
                <Card player={players[14]} />
                <img className="icon--versus" src={Versus} alt="Versus" />
                <Card player={players[15]} />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
