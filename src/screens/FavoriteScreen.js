import React, { useState, useCallback } from "react";
import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/Favorite";
import { getPokemonDetailByIdAPI } from "../api/pokemonAPI";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NotLogged from "../components/NotLogged";

export default function FavoriteScreen() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = [];

          for await (const idPokemon of response) {
            const pokemonDetails = await getPokemonDetailByIdAPI(idPokemon);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLogged /> : <PokemonList pokemons={pokemons} />;
}
