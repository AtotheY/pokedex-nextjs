export function modifyPokemonData(data: any[]) {
  return data.map(pokemon => {
    const { id, name, height, weight, url, types, sprites } = pokemon;
    return { id, name, height, weight, url, types, sprites };
  });
}
