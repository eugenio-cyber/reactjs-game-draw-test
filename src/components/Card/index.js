import "./styles.css";

function Card({ player }) {
  return (
    <>
      {player && (
        <div className="card">
          <img className="card__avatar" src={player.avatar} alt="Avatar" />
          <span className="card__nick">{player.nick}</span>
          <img className="card__flag" src={player.flag} alt="Flag" />
        </div>
      )}
    </>
  );
}

export default Card;
