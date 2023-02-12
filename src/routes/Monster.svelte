<script lang="ts">
  import type { IndexMonster } from "./+page";

  export let monster: IndexMonster;
  export let updateSearchParams: (key: string, value: string) => void;
  export let isInteractive: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="monster">
  <div on:click={() => isInteractive ? updateSearchParams('monsterId', monster.id) : () => {}}>
    <div class="monster-content">
      <img src={monster.image} alt={monster.name} />
      {monster.name}
    </div>
    <div class="monster-id">
      {monster.id}
    </div>
  </div>
  {#if isInteractive}
    <div on:click={() => updateSearchParams('monsterId2', monster.id)}>
      Add Monster 2
    </div>
  {/if}
</div>

<style>
.monster-id {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 0.8em;
  color: #aaa;
}
.monster {
  width: 100px;
  margin: 10px;
  padding: 10px;
  position: relative;
  background-color: #eee;
}
.monster:hover {
  background-color: #ddd;
}
.monster-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>