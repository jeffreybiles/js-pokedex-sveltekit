<script lang="ts">
import type { PageData } from "./$types";
import { generations } from "./generations";

export let data: PageData;
</script>

<div class="generations">
{#each generations as generation (generation.id)}
  <div class="generation">{generation.main_region}</div>
{/each}
</div>

<div class="monsters">
  {#each data.monsters as monster (monster.id)}
    
    <div class="monster">
      <div class="monster-content">
        <img src={monster.image} alt={monster.name} />
        {monster.name}
      </div>
      <div class="monster-id">
        {monster.id}
      </div>
    </div>
  {/each}
</div>

<style>
  .generations {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .generation {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid black;
    background-color: #f9f9f9;
    color: #333;
  }
  .generation:hover {
    background-color: #eee;
  }
  .monsters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
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