import "./PokemonCard.css";

type PokemonCardProps = {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  let image;

  if (pokemon.imgSrc != null) {
    image = (
      <img className="pokemon-img" src={pokemon.imgSrc} alt={pokemon.name} />
    );
  } else {
    image = <p className="pokemon-img pokemon-placeholder">???</p>;
  }

  return (
    <figure className={`pokemon-card ${pokemon.name}`}>
      {image}
      <figcaption className="pokemon-name">{pokemon.name}</figcaption>
    </figure>
  );
}
