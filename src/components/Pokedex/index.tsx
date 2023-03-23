import React from 'react';
import PokemonCard from '../PokemonCard';
import { Pokemon } from '@constants/interfaces';

interface Props {
  pokemonData: Pokemon[];
}

export default function Pokedex({ pokemonData }: Props) {
  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {pokemonData.map((pokemon: Pokemon) => {
        const { sprites, name, id } = pokemon;
        return (
          <div className="w-full md:w-1/3 px-4 mb-8 text-center" key={id}>
            <PokemonCard
              spriteUrl={sprites.other['official-artwork'].front_default}
              name={name}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
}
