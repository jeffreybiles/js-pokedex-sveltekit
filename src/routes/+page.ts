import type { PageLoad } from "./$types"

type ApiMonster = {
  name: string
  url: string
}
export type IndexMonster = ApiMonster & {
  id: string
  image: string
}
export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const json = await response.json()
  const monsters: IndexMonster[] = json.results.map((monster: ApiMonster) => {
    const splitUrl = monster.url.split('/')
    const id = splitUrl[splitUrl.length - 2]
    return {
      name: monster.name,
      url: monster.url,
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }
  })

  return {
    monsters
  }
}) satisfies PageLoad