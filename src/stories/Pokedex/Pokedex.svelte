<script lang="ts">
  import { onMount } from "svelte";
  import TypesFilter from "../TypesFilter/TypesFilter.svelte";
  import type { PokemonEntryType } from "../PokemonEntry/PokemonEntryType";
  import type { PokemonTypes } from "../TypeBadge/colors";
  import PokemonRoll from "../PokemonRoll/PokemonRoll.svelte";
  import Loader from "../Loader/Loader.svelte";

  const MAX_POKEMON_PER_PAGE = 50;

  export let title: string | undefined;

  let filteredByType: PokemonEntryType[] = [];
  let allPokemon: PokemonEntryType[] = [];
  let selectedType: PokemonTypes | null = null;
  let isLoading: boolean;

  onMount(async () => {
    isLoading = true;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON_PER_PAGE}`
    );
    const data = await response.json();
    allPokemon = data.results;
    isLoading = false;
  });

  const fetchByType = async (type: PokemonTypes) => {
    isLoading = true;
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    const pokemon = data.pokemon.map((pokemon: any) => pokemon.pokemon);
    const paginatedPokemon = pokemon.slice(0, MAX_POKEMON_PER_PAGE);

    filteredByType = paginatedPokemon;
    isLoading = false;
  };

  $: {
    if (selectedType) {
      fetchByType(selectedType);
    }
  }
</script>

<div class="pokedex-container">
  {#if title}
    <div class="header-container">
      <h1>{title}</h1>
    </div>
  {/if}
  <aside>
    <TypesFilter bind:selectedType />
  </aside>

  {#if isLoading}
    <Loader>Loading pokemon</Loader>
  {:else}
    <PokemonRoll pokemonList={selectedType ? filteredByType : allPokemon} />
  {/if}
</div>

<style>
  .pokedex-container {
    display: grid;
    gap: var(--space-large);
    grid-template-columns: 1fr 6fr;
    overflow: auto;
    max-height: 99dvh;
  }

  .header-container {
    grid-column: span 2;
  }

  aside {
    position: sticky;
    top: 0;
  }
</style>
