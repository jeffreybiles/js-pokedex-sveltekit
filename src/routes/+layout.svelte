<script lang="ts">
  import { productionApi } from '$lib/production-api';
  import type { LayoutData } from './$types';
  import type { Lesson } from '$lib/types';
  
  export let data: LayoutData;

  $: lesson = data.lesson as Lesson
</script>

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

<slot />

<style>
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