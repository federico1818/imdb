import { Actor } from "src/app/models/actor"
import { MovieImages } from "src/app/models/movie-images"

export interface Movie {
    id: string
    title: string
    image: string
    year: string
    plot: string
    actorList: Actor[]
    images: MovieImages
}
