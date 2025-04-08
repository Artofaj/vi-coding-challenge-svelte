<script lang="ts">
  import { onMount } from "svelte";
  import TypeBadge from "../TypeBadge/TypeBadge.svelte";
  import type { PokemonEntryType } from "./PokemonEntryType";

  let pokemon: PokemonEntryType | undefined;

  export let name: string;

  onMount(async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    pokemon = data;
  });
</script>

<div class="pokemon-entry">
  {#if pokemon}
    <div class="pokemon-id">#{pokemon.id}</div>
    <div class="pokemon-sprite-container">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    <div class="pokemon-name-container">
      <h2>{pokemon.name}</h2>

      <ul class="pokemon-types-list">
        {#each pokemon.types as type}
          <li>
            <TypeBadge type={type.type.name} />
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .pokemon-entry {
    border: var(--border);
    background-color: var(--color-background);
    aspect-ratio: 1/1;
    width: 100%;
    max-width: 200px;
    display: flex;
    color: var(--color-primary);
    position: relative;
    flex-direction: column;
    box-sizing: border-box;
  }

  .pokemon-entry h2 {
    margin: 0;
    text-transform: capitalize;
    font-size: 1rem;
  }

  .pokemon-sprite-container {
    flex: 1 1 auto;
  }

  .pokemon-sprite-container img {
    width: 100%;
    height: 90%;
  }

  .pokemon-id {
    position: absolute;
    top: 0;
    right: 0;
    padding: var(--space-small);
  }

  .pokemon-name-container {
    border-top: var(--border);
    padding: 0 var(--space-medium);
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .pokemon-types-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 15px);
    gap: var(--space-small);
    grid-auto-flow: column;
    grid-auto-columns: 15px;
  }

  .pokemon-types-list li {
    display: inline-block;
  }
</style>
