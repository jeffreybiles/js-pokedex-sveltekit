import type { LayoutServerLoad } from "./$types"
import { productionApi } from "$lib/production-api";

export const load = (async ({fetch}) => {
  /*
    We need to get this data for the modal-enabled branches, but not for the main branch
    The lesson_id will be changed per branch - we're hardcoding for now and will change per branch
  */
  const lesson_id = '102'
  const response = await fetch(`https://${productionApi}/api/lessons/${lesson_id}`);
  const data  = await response.json();

  return {
    lesson: data.lesson,
  }
}) satisfies LayoutServerLoad;

export const ssr = false;