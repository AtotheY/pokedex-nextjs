import { API_URL } from '@constants/index';

export async function fetchPokedex({ limit }: { limit: number }) {
  const res = await fetch(API_URL + `?limit=${limit}`);
  const data = await res.json();
  return data;
}

export async function fetchPokemon({ id }: { id: number }) {
  const res = await fetch(API_URL + id);
  const data = await res.json();
  return data;
}
