import type { PageLoad } from "./$types"

type IndexMonster = {
  name: string
  url: string
}
export const load = (async ({ fetch, url }) => {
  let monsterList;

  let generationId = url.searchParams.get('generation')
  if(generationId) {
    const response = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}`)
    const json = await response.json()
    monsterList = json.pokemon_species
  } else {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
    const json = await response.json()
    monsterList = json.results
  }

  const monsters = monsterList.map((monster: IndexMonster) => {
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