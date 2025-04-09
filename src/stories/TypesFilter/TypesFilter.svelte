<script lang="ts">
  import { onMount } from "svelte";
  import type { PokemonTypes } from "../TypeBadge/colors";
  import TypeBadge from "../TypeBadge/TypeBadge.svelte";

  let types: PokemonTypes[] = [];
  let loading = true;

  export let selectedType: PokemonTypes | null = null;

  onMount(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    const data = await response.json();

    types = data.results.map((type: any) => type.name);
    loading = false;
  });
</script>

<form class="outer-container">
  <h1>Filter</h1>
  <h2>Types</h2>
  {#if loading}
    <p>Loading...</p>
  {:else}
    {#each types as type}
      <label>
        <input
          type="radio"
          name="type"
          value={type}
          bind:group={selectedType}
        />
        {type}
        <TypeBadge {type} />
      </label>
    {/each}
    <label>
      <input type="radio" name="type" value={null} bind:group={selectedType} />
      show all
    </label>
  {/if}
</form>

<style>
  .outer-container {
    display: flex;
    flex-direction: column;
    padding: var(--space-medium);
    background-color: var(--color-background);
    border: var(--border);
    color: var(--color-primary);
    align-items: flex-start;
  }

  label {
    display: grid;
    grid-template-columns: auto auto 15px;
    gap: var(--space-small);
    align-items: center;
  }

  h1,
  h2 {
    margin: 0;
  }
</style>
