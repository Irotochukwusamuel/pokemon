import Image from "next/image";
import axios from 'axios';
import PokemonCard from "./components/PokemonCard";
import DisplayPage from "./components/DisplayPage";
import Badge from "./components/Badge";

const getPokemonTypes = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/type");

  return res.data;
};

export default async function Home() {
  const pokemonTypes = await getPokemonTypes();

  return (
    <DisplayPage title="Explore Pokemon by type">
      {pokemonTypes.results.map((type) => {
        return (
          <Badge
            key={type.name}
            text={type.name}
            path={`/${type.name}`}
          />
        );
      })}
    </DisplayPage>
  );
}
