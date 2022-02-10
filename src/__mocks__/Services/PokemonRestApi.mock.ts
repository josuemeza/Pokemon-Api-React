import { faker } from "@faker-js/faker"

interface ServiceResponseListElement {
  url: string
}
interface ServiceResponseSingleElement {
  name: string
  sprites: {
    "front_default": string
    "other": {
      "official-artwork": {
        "front_default": string
      }
    }
  }
}

export const services = {
  responses: {
    list: (defaultValues?: ServiceResponseListElement[]) => {
      return {
        "data": {
          "results": defaultValues || [{
            "url": "https://sample.pokemon"
          }]
        }
      }
    },
    single: (defaultValues?: ServiceResponseSingleElement) => {
      return {
        "data": {
          "name": faker.name.findName(),
          "sprites": {
            "front_default": faker.image.imageUrl(),
            "other": {
              "official-artwork": {
                "front_default": faker.image.imageUrl()
              }
            }
          },
          ...defaultValues
        }
      }
    }
  }
}