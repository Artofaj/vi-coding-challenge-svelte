<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TypesFilter from "./TypesFilter.svelte";

  const { Story } = defineMeta({
    title: "TypesFilter",
    component: TypesFilter,
  });
</script>

<Story name="Empty">
  <TypesFilter />
</Story>
