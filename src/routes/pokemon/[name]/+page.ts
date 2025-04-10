import type { PageLoad } from "../$types";

export const load: PageLoad = ({ params }) => {

  const pokemon = params.name

  return {
    pokemonName: pokemon,
  };

};
