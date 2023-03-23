import React from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsResult } from 'next';
import { fetchPokemon } from '@api/pokemon';
import { Pokemon } from '@constants/interfaces';

interface Props {
  pokemonData: Pokemon;
}

export default function PokemonDetail({ pokemonData }: Props) {
  const { id, name, height, weight, types, sprites } = pokemonData;
  const imgUrl = sprites?.other?.['official-artwork']?.front_default;

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-lg mx-auto rounded-md bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-2">
          National Dex #{id}: {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
        <img src={imgUrl} alt={name} className="w-64 mx-auto mb-4" />
        <p className="font-semibold text-lg">Height: {height}m</p>
        <p className="font-semibold text-lg">Weight: {weight}kg</p>
        <div className="flex mt-4">
          {types.map(type => (
            <span
              key={type.slot}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2"
            >
              {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  for (let i = 1; i <= 151; i++) {
    paths.push({ params: { id: i.toString() } });
  }
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params
}): Promise<GetStaticPropsResult<Props>> => {
  const id = typeof params?.id === 'string' ? parseInt(params.id) : 152;
  const data = await fetchPokemon({ id });
  const { name, height, weight, types, sprites } = data;
  const pokemonData = {
    id,
    name,
    height,
    weight,
    types,
    sprites
  };
  return { props: { pokemonData } };
};
