<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TypeBadge from "./TypeBadge.svelte";

  const { Story } = defineMeta({
    title: "TypeBadge",
    component: TypeBadge,
    argTypes: {
      type: { name: "text" },
    },
  });
</script>

<Story name="Normal">
  <TypeBadge type="normal" />
</Story>

<Story name="Fire">
  <TypeBadge type="fire" />
</Story>

<Story name="Water">
  <TypeBadge type="water" />
</Story>

<Story name="Electric">
  <TypeBadge type="electric" />
</Story>

<Story name="Grass">
  <TypeBadge type="grass" />
</Story>

<Story name="Ice">
  <TypeBadge type="ice" />
</Story>

<Story name="Fighting">
  <TypeBadge type="fighting" />
</Story>

<Story name="Poison">
  <TypeBadge type="poison" />
</Story>

<Story name="Ground">
  <TypeBadge type="ground" />
</Story>

<Story name="Flying">
  <TypeBadge type="flying" />
</Story>

<Story name="Psychic">
  <TypeBadge type="psychic" />
</Story>

<Story name="Bug">
  <TypeBadge type="bug" />
</Story>

<Story name="Rock">
  <TypeBadge type="rock" />
</Story>

<Story name="Ghost">
  <TypeBadge type="ghost" />
</Story>

<Story name="Steel">
  <TypeBadge type="steel" />
</Story>

<Story name="Dragon">
  <TypeBadge type="dragon" />
</Story>

<Story name="Dark">
  <TypeBadge type="dark" />
</Story>

<Story name="Fairy">
  <TypeBadge type="fairy" />
</Story>

<Story name="Shadow">
  <TypeBadge type="shadow" />
</Story>

<Story name="Stellar">
  <TypeBadge type="stellar" />
</Story>
