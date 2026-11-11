interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((onePokemonFromTheList) => (
        <button
          key={onePokemonFromTheList.name}
          type="button"
          onClick={() => {
            if (onePokemonFromTheList.name === "pikachu") {
              alert("pika pikachu !!!");
            }
            setPokemonName(onePokemonFromTheList.name);
          }}
        >
          {onePokemonFromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
