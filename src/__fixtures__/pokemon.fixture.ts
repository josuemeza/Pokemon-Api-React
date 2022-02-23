import Pokemon from "../Model/Pokemon";

interface PokemonFixtureProps {
  name?: string;
  spriteUrl?: string;
  photoUrl?: string;
}

export const pokemonFixture = (props?: PokemonFixtureProps): Pokemon => {
  return {
    name: props?.name || "some name",
    spriteUrl: props?.spriteUrl || "some url",
    photoUrl: props?.photoUrl || "some photo",
  };
};
