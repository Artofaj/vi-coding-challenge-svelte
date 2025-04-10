<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import PokemonEntry from "./PokemonEntry.svelte";

  const allExamples = ["Charizard", "Venusaur", "Blastoise"];

  const { Story } = defineMeta({
    title: "PokemonEntry",
    component: PokemonEntry,
    tags: ["autodocs"],
    argTypes: {
      name: {
        control: { type: "select" },
        options: Object.values(allExamples),
      },
    },
  });
</script>

<Story name="Default" args={{ name: allExamples[0] }} />
