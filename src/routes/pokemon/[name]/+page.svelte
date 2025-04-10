<script lang="ts">
  import type { PageProps } from "../$types";

  let { data }: PageProps = $props();
</script>

<h1>Pokemon page incoming!</h1>

<p>We are working on an awesome page for:</p>
<h2>
  {data.pokemonName}
</h2>

<a href="/"> Take me back</a>
