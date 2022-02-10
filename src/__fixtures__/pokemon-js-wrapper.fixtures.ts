import { faker } from "@faker-js/faker"
import { FakePokemonListItem, FakePokemonSingle } from "./pokemon-js-wrapper.types"

export const fakePokemonListItem = (defaultValues?: FakePokemonListItem) => ({
  "name": faker.name.firstName(),
  "url": "https://sample.pokemon",
  ...defaultValues
})

export const fakePokemonSingle = (defaultValues?: FakePokemonSingle) => ({
  "name": faker.name.firstName(),
  "sprites": {
    "front_default": faker.image.imageUrl(),
    "other": {
      "official-artwork": {
        "front_default": faker.image.imageUrl()
      }
    }
  },
  ...defaultValues
})