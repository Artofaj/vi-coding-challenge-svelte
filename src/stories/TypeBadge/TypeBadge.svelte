<script lang="ts">
  import { typeColors } from "./colors";

  export let type: string;
</script>

<div
  class="type-badge"
  title={type}
  style={`--pokemon-type-color: ${typeColors[type as keyof typeof typeColors] || typeColors.normal};`}
></div>

<style>
  .type-badge {
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    min-width: 0.5rem;
    max-width: 2rem;
    background-color: var(--pokemon-type-color);
  }
</style>
