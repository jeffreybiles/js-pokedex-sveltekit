<script lang="ts">
  import { caughtMonsters } from "../../lib/stores";
</script>

<h2>My Monsters</h2>

{#each $caughtMonsters as id}
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
{/each}