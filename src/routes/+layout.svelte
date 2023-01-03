<script lang="ts">
  import { page } from '$app/stores';
  import { productionApi } from '$lib/production-api';
  import type { LayoutData } from './$types';
  import type { Lesson } from '$lib/types';
  
  export let data: LayoutData;

  $: lesson = data.lesson as Lesson
</script>

<div class="navbar">
  <a href="/" class:active={$page.url.pathname == '/'}>Home</a>
  <a href="/my-monsters" class:active={$page.url.pathname == '/my-monsters'}>My Monsters</a>
</div>

<div class="container">
  <slot />
</div>

{#if lesson}
  <!-- svelte-ignore security-anchor-rel-noreferrer -->
  <a
    class="lesson-modal-button"
    href="https://{productionApi}/lessons/{lesson.id}"
    target="_blank"
  >
    This is the state of the app for "Lesson {lesson.number} - {lesson.name}".<br>
    Click here for source code and tutorials for making this site in {lesson.implementations.map(implementation => implementation.framework).join(', ')}.
  </a>
{/if}

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

  .lesson-modal-button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 16px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #333333;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.7);
    border: none;
    text-decoration: none;
  }
</style>