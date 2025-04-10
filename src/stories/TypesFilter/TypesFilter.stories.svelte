<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TypesFilter from "./TypesFilter.svelte";
  import { allPokemonTypes } from "../TypeBadge/colors";

  const { Story } = defineMeta({
    title: "TypesFilter",
    component: TypesFilter,
    tags: ["autodocs"],
    argTypes: {
      selectedType: {
        control: { type: "select" },
        options: [...Object.values(allPokemonTypes), null],
      },
    },
  });
</script>

<Story name="Empty" argTypes={{ selectedType: { defaultValue: null } }} />
