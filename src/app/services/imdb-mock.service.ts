import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'

import { ResultMovie } from 'src/app/models/result-movie'
import { ImdbService } from 'src/app/services/imdb.service'

@Injectable({
    providedIn: 'root'
})

export class ImdbMockService implements ImdbService {

    public searchMovie(q: string): Observable<ResultMovie[]> {
        let response: ReplaySubject<ResultMovie[]> = new ReplaySubject<ResultMovie[]>()

        const results: ResultMovie[] = [
            {
                id: "tt10855768",
                resultType: "Movie",
                image: "https://m.media-amazon.com/images/M/MV5BNWExMzg3NjAtZmZmYy00MWE3LWJkNjEtOTYzYTZjYTZkMjZiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6757_AL_.jpg",
                title: "Missing",
                description: "2023 Tim Griffin, Ava Zaria Lee"
            },
            {
                id: "tt3155298",
                resultType: "Movie",
                image: "https://m.media-amazon.com/images/M/MV5BZTQwMWFhYWMtZmE0OS00MmMxLWE3NzAtYjU1NzIyZjdmODNhXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.6757_AL_.jpg",
                title: "Luther: The Fallen Sun",
                description: "2023 Idris Elba, Cynthia Erivo"
            },
            {
                id: "tt1586680",
                resultType: "Movie",
                image: "https://m.media-amazon.com/images/M/MV5BZDgxNjQ2MjMtMjk2Yi00M2Q2LWI0ZDktOGM1NWI5YWUzMjk4XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_Ratio0.6757_AL_.jpg",
                title: "Shameless",
                description: "2011–2021 TV Series Emmy Rossum, William H. Macy"
            },
        ] as ResultMovie[]

        response.next(results)

        return response
    }

}
