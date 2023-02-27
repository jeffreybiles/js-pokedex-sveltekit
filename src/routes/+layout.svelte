<script lang="ts">
  import { page } from '$app/stores';
  import { count } from '$lib/stores';
</script>

<div class="navbar">
  <a href="/" class:active={$page.url.pathname == '/'}>Home</a>
  <a href="/my-monsters" class:active={$page.url.pathname == '/my-monsters'}>
    My Monsters ({$count})
  </a>
</div>

<div class="container">
  <slot />
</div>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  .navbar a {
    color: #fff;
    text-decoration: none;
    padding: 4px;
  }

  .navbar a:hover {
    color: #CCC;
  }

  .navbar a.active {
    border: 1px solid #CCC;
    border-radius: 4px;
  }

  :global(body) {
    margin: 0;
  }

  .container {
    max-width: 90%;
    margin: 0 auto;
    width: 1200px;
  }
</style>