export type Implementation = {
  framework: 'SvelteKit 1.0' | 'Nuxt 3' | 'Next 13' | 'Remix 1.10',
  githubUrl: string,
  youtubeId: string,
}
export type Lesson = {
  id: string,
  number: string,
  name: string,
  demoSubdomain?: string, // only link if there's a demoSubdomain
  implementations: Implementation[],
  description?: string,
}
