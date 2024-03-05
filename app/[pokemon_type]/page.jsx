"use client";

import {useState, useEffect} from "react";
import axios from "axios";
import DisplayPage from "@/app/components/DisplayPage";
import PokemonCard from "@/app/components/PokemonCard";
import Paginator from "../components/Paginator";
import SearchInput from "../components/SearchInput";
import Loading from "../loading";

const getPokemons = async (pokemon_type) => {
    const res = await axios.get(
        `https://pokeapi.co/api/v2/type/${pokemon_type}/`
    );

    return res.data;
};

export default function Page({params}) {
    let [currentPage, setCurrentPage] = useState(0);
    let [data, setData] = useState([]);
    let [displayData, setDisplayData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    const pokemon_type = params.pokemon_type;

    useEffect(() => {
        const getAllPokemons = async () => {
            setIsLoading(true);
            const data = await getPokemons(pokemon_type);
            setData(data.pokemon);
            setDisplayData(data.pokemon);
            setIsLoading(false);
        };

        getAllPokemons();
    }, [pokemon_type, setData, setDisplayData]);

    const inputHandler = (e) => {
        if (!e.target.value) {
            setDisplayData(data);
        }

        const query_results = data.filter(({pokemon}) =>
            pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
        );


        setDisplayData(query_results || []);
        setCurrentPage(0);
    };


    let pokemon_results;

    if (data.length < 1 && !isLoading) {
        pokemon_results = (
            <div className="text-center">
                <p>No pokemons were found for this type </p>
            </div>
        );
    } else if (displayData.length < 1 && !isLoading) {
        pokemon_results = (
            <div className="text-center">
                <p>No search results </p>
            </div>
        );
    } else if (isLoading) return <Loading/>;

    return (
        <div className="pb-20">
            <div className="flex justify-center mb-10">
                <SearchInput onInput={inputHandler}/>
            </div>
            {pokemon_results ? (
                pokemon_results
            ) : (
                <>
                    <DisplayPage title={`${params.pokemon_type} pokemons`}>
                        {displayData
                            .slice(currentPage * 25, currentPage * 25 + 25)
                            .map(({pokemon}, index) => {
                                const pokemonUrl = pokemon.url.split("/");
                                const pokemonIndex = pokemonUrl[pokemonUrl.length - 2];

                                return (
                                    <PokemonCard
                                        key={index}
                                        name={pokemon.name}
                                        path={`/${params.pokemon_type}/pokemon/${pokemon.name}`}
                                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
                                    />
                                );
                            })}
                    </DisplayPage>
                    <Paginator
                        page={currentPage}
                        setPage={setCurrentPage}
                        total_pages={Math.ceil(displayData.length / 25)}
                    />
                </>
            )}
        </div>
    );
}
