export type Generation = {
  id: number,
  name: string,
  games: string[],
  main_region: string,
  pokemon_species?: string[],
}

export const generations: Generation[] = [
  {
    id: 1,
    name: 'Generation I',
    games: ['Red', 'Blue', 'Yellow'],
    main_region: 'Kanto',
  },
  {
    id: 2,
    name: 'Generation II',
    games: ['Gold', 'Silver', 'Crystal'],
    main_region: 'Johto',
  },
  {
    id: 3,
    name: 'Generation III',
    games: ['Ruby', 'Sapphire', 'Emerald'],
    main_region: 'Hoenn',
  },
  {
    id: 4,
    name: 'Generation IV',
    games: ['Diamond', 'Pearl', 'Platinum'],
    main_region: 'Sinnoh',
  },
  {
    id: 5,
    name: 'Generation V',
    games: ['Black', 'White', 'Black 2', 'White 2'],
    main_region: 'Unova',
  },
  {
    id: 6,
    name: 'Generation VI',
    games: ['X', 'Y', 'Omega Ruby', 'Alpha Sapphire'],
    main_region: 'Kalos',
  },
  {
    id: 7,
    name: 'Generation VII',
    games: ['Sun', 'Moon', 'Ultra Sun', 'Ultra Moon'],
    main_region: 'Alola',
  },
  {
    id: 8,
    name: 'Generation VIII',
    games: ['Sword', 'Shield'],
    main_region: 'Galar',
  },
]