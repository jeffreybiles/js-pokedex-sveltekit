<script lang="ts">
import { generations } from "./generations";
</script>

{#each generations as generation (generation.id)}
  <h1>{generation.name}</h1>
  <p>Games: {generation.games.join(', ')}</p>
  <p>Main region: {generation.main_region}</p>
{/each}

<style>

</style>