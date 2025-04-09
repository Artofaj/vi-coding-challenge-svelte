<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Pokedex from "./Pokedex.svelte";

  const { Story } = defineMeta({
    title: "Pokedex",
    component: Pokedex,
  });
</script>

<Story name="Default">
  <Pokedex />
</Story>

<Story name="With header">
  <Pokedex title="These are our products" />
</Story>
