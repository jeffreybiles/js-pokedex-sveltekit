<script lang="ts">
import type { PageData } from "./$types";
import { page } from "$app/stores";
import { generations } from "./generations";
import { goto } from "$app/navigation";

export let data: PageData;

$: monsterId = $page.url.searchParams.get("monsterId") || '';
$: monster = data.monsters.find((monster) => monster.id === monsterId);
$: monsterId2 = $page.url.searchParams.get("monsterId2") || '';
$: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

const updateSearchParams = (key: string, value: string) => {
  const searchParams = new URLSearchParams($page.url.searchParams);
  searchParams.set(key, value);
  goto(`?${searchParams.toString()}`);
};

</script>

<h1>{monsterId}</h1>
<h2>{monster?.name}</h2>
<h1>{monsterId2}</h1>
<h2>{monster2?.name}</h2>

<div class="generations">
  {#each generations as generation (generation.id)}
    <div class="generation">{generation.main_region}</div>
  {/each}
</div>

<div class="monsters">
  {#each data.monsters as monster (monster.id)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="monster">
      <div on:click={() => updateSearchParams('monsterId', monster.id)}>
        <div class="monster-content">
          <img src={monster.image} alt={monster.name} />
          {monster.name}
        </div>
        <div class="monster-id">
          {monster.id}
        </div>
      </div>
      <div on:click={() => updateSearchParams('monsterId2', monster.id)}>
        Add Monster 2
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