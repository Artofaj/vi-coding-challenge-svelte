<script lang="ts">
  import PokemonEntry from "../PokemonEntry/PokemonEntry.svelte";
  import type { PokemonEntryType } from "../PokemonEntry/PokemonEntryType";

  export let pokemonList: PokemonEntryType[];

  $: {
    console.log(pokemonList);
  }
</script>

<ul class="pokemon-list">
  {#if pokemonList}
    {#each pokemonList as pokemon}
      <li>
        <PokemonEntry name={pokemon.name} />
      </li>
    {/each}
  {/if}
</ul>

<style>
  .pokemon-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: auto;
    gap: var(--space-medium);
    overflow: auto;
    height: 100%;
  }

  li {
    list-style: none;
    height: auto;
  }
</style>
