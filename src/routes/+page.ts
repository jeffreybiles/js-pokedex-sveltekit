import type { PageLoad } from "./$types"

type IndexMonster = {
  name: string
  url: string
}
export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const json = await response.json()
  const monsters = json.results.map((monster: IndexMonster) => {
    const splitUrl = monster.url.split('/')
    const id = splitUrl[splitUrl.length - 2]
    return {
      name: monster.name,
      url: monster.url,
      id,
    }
  })

  return {
    monsters
  }
}) satisfies PageLoad