// function PokemonCard() {
//   return (
//     <figure>
//       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/> 
//       <figcaption>balbusar</figcaption>
//     </figure>
//   )
// }

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
