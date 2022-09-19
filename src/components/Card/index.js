import "./styles.css";

function Card({ player }) {
  return (
    <>
      {player && (
        <div className="card">
          <img className="card__avatar" src={player.avatar} alt="Avatar" />
          <img className="card__flag" src={player.flag} alt="Flag" />
          <span className="card__nick">{player.nick}</span>
        </div>
      )}
    </>
  );
}

export default Card;
