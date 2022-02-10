export interface FakePokemonListItem {
  "name"?: string
  "url"?: string
}

export interface FakePokemonSingle {
  "name"?: string
  "sprites"?: {
    "front_default": string
    "other": {
      "official-artwork": {
        "front_default": string
      }
    }
  }
}