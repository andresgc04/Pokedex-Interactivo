export const searchPokemon = async (pokemon) => {
  try {
    let url = process.env.REACT_APP_URL_BASE + `/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemons = async (limit = 25, offset = 0) => {
  try {
    let url =
      process.env.REACT_APP_URL_BASE +
      `/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
