type PokemonCardProps = {
  pokemon: {
    name: string;
    imgSrc?: string;
  }
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  let image;

  if (pokemon.imgSrc != null) {
    image = <img src={pokemon.imgSrc} alt={pokemon.name} />;
  }

  else {
    image = <p>???</p>;
  }

  return (
    <figure>
      {image}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  )
}
