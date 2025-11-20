import GameCard from './GameCard.jsx';

const GameCarousel = ({ title, games }) => {
  return (
    <section className="carousel">
      <div className="carousel-header">
        <h2>{title}</h2>
        <button className="see-all" type="button">
          See all
        </button>
      </div>
      <div className="carousel-row">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default GameCarousel;
