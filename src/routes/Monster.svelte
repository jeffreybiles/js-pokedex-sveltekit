<script lang="ts">
  import type { IndexMonster } from "./+page";
  import { caughtMonsters } from "../lib/stores";

  export let monster: IndexMonster;
  export let isInteractive: boolean = false;

  const addMonster = (id: string) => {
    $caughtMonsters = [...$caughtMonsters, id];
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="monster">
  <div on:click={() => isInteractive ? addMonster(monster.id) : () => {}}>
    <div class="monster-content">
      <img src={monster.image} alt={monster.name} />
      {monster.name}
    </div>
    <div class="monster-id">
      {monster.id}
    </div>
  </div>
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