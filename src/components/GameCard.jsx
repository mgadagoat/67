const GameCard = ({ game }) => {
  return (
    <div className="game-card" role="article">
      <div className="game-card-thumbnail">
        <img src={game.thumbnail} alt={`${game.title} thumbnail`} loading="lazy" />
      </div>
      <div className="game-card-body">
        <h3>{game.title}</h3>
        <p className="creator">by {game.creator}</p>
        <p className="players">{game.players}</p>
      </div>
    </div>
  );
};

export default GameCard;
