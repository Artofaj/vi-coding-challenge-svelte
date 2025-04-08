<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import PokemonEntry from "./PokemonEntry.svelte";

  const { Story } = defineMeta({
    title: "PokemonEntry",
    component: PokemonEntry,
    argTypes: {
      name: { name: "text" },
    },
  });
</script>

<Story name="Charizard">
  <PokemonEntry name={"charizard"} />
</Story>

<Story name="Bulbasaur">
  <PokemonEntry name={"bulbasaur"} />
</Story>
