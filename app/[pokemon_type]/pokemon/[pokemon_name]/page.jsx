import Image from "next/image";
import axios from "axios";
import SectionItem from "../SectionItem";
import SectionContainer from "../SectionContainer";

const getPokemonData = async (pokemon_name) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}/`);

  return res.data;
};

export default async function Page({ params }) {
  const pokemon = await getPokemonData(params.pokemon_name);

  const base_stats = [
    {
      name: "HP",
      value: pokemon.stats.find((stat) => stat.stat.name === "hp").base_stat,
    },
    {
      name: "Attack",
      value: pokemon.stats.find((stat) => stat.stat.name === "attack")
        .base_stat,
    },
    {
      name: "Defense",
      value: pokemon.stats.find((stat) => stat.stat.name === "defense")
        .base_stat,
    },
    {
      name: "Sp. Attack",
      value: pokemon.stats.find((stat) => stat.stat.name === "special-attack")
        .base_stat,
    },
    {
      name: "Sp. Defense",
      value: pokemon.stats.find((stat) => stat.stat.name === "special-defense")
        .base_stat,
    },
    {
      name: "Speed",
      value: pokemon.stats.find((stat) => stat.stat.name === "speed").base_stat,
    },
  ];

  const type_effectiveness = [
    {
      name: "Fighting",
      value: pokemon.types.find((type) => type.name === "fighting"),
    },
  ];

  return (
    <div className="w-3/4 m-auto">
      {/* Header */}
      <div className="p-4 flex flex-wrap">
        <div className="w-1/2 md:max-w-64 flex justify-center items-center bg-gray-200 mr-4 flex-grow sm:w-full">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width={176}
            height={176}
            alt="Pokemon Image"
            quality={100}
          />
        </div>
        <div className="p-4">
          <h1 className="first-letter:capitalize font-bold text-lg mb-4">
            {pokemon.name}
          </h1>
          <p className="text-base mb-4">
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
          <p className="text-base">{`Height: ${pokemon.height}cm, Weight: ${pokemon.weight}kg`}</p>
        </div>
      </div>
      {/* Header End */}
      {/* Abilities */}
      <div className="py-4">
        <div className="p-5">
          <h1 className="font-bold text-lg">Abilities</h1>
        </div>
        {pokemon.abilities.map((ability) => (
          <div className="p-5" key={ability.ability_name}>
            <p className="font-normal text-base">{ability.ability.name}</p>
          </div>
        ))}
      </div>
      {/* Abilities End */}
      {/* Stats */}
      <SectionContainer title="Base Stats">
        {base_stats.map((stat) => (
          <SectionItem key={stat.name} name={stat.name} value={stat.value} />
        ))}
      </SectionContainer>
      {/* Stats End */}

      {/* Sprites */}
      <SectionContainer
        title="Sprites"
        className="justify-start items-center gap-4"
      >
        {Object.values(pokemon.sprites)
          .filter((sprite) => !!sprite && typeof sprite === "string")
          .map((sprite, index) => (
            <div key={index} className="bg-gray-200 flex justify-center items-center">
              <Image
                src={sprite}
                width={213}
                height={213}
                alt="Pokemon Sprite"
                quality={100}
              />
            </div>
          ))}
      </SectionContainer>
      {/* End Sprites */}
    </div>
  );
}
