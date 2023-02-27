<script lang="ts">
  import { count, doubleCount } from '$lib/stores';
</script>

<p>
  Count is: {$count}. Double: {$doubleCount}
</p>
<button on:click={() => count.set($count + 1)}>++</button>
<button on:click={() => count.update(c => c + 1)}>+=</button>
<button on:click={() => $count = $count + 1}>+</button>