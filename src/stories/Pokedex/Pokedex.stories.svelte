<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Pokedex from "./Pokedex.svelte";

  const { Story } = defineMeta({
    title: "Pokedex",
    component: Pokedex,
    tags: ["autodocs"],
    argTypes: {
      title: { control: "text" },
    },
  });
</script>

<Story name="Default" args={{ title: "These are our products" }} />
