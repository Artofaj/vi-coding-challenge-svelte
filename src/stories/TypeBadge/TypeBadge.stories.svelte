<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TypeBadge from "./TypeBadge.svelte";
  import { allPokemonTypes, type PokemonTypes } from "./colors";

  const { Story } = defineMeta({
    title: "TypeBadge",
    component: TypeBadge,
    tags: ["autodocs"],
    argTypes: {
      type: {
        control: { type: "select" },
        options: Object.values(allPokemonTypes),
      },
    },
  });

  const primaryArgs = allPokemonTypes;
</script>

<Story name="Default" args={{ type: primaryArgs[0] }}></Story>
