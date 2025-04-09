<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Loader from "./Loader.svelte";

  const { Story } = defineMeta({
    title: "Loader",
    component: Loader,
  });
</script>

<Story name="Default">
  <Loader />
</Story>
<Story name="With text">
  <Loader>Loading</Loader>
</Story>
