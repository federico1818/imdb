import { Injectable } from '@angular/core'
import { Observable, ReplaySubject } from 'rxjs'

import { Movie } from 'src/app/models/movie'
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

    public title(id: string): Observable<Movie> {
        let response: ReplaySubject<Movie> = new ReplaySubject<Movie>()

        const movie: Movie = {
            id: 'tt1375666',
            title: 'Inception',
            year: '2010',
            image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg',
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
            actorList: [
                {
                    id: "nm0000138",
                    image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
                    name: "Leonardo DiCaprio",
                    asCharacter: "Cobb"
                },
            ],
            images: {
                items: [
                    {
                        title: 'Leonardo DiCaprio and Ken Watanabe in Inception (2010)',
                        image: 'https://m.media-amazon.com/images/M/MV5BMjIyNjk1OTgzNV5BMl5BanBnXkFtZTcwOTU0OTk1Mw@@._V1_Ratio1.5000_AL_.jpg'
                    },
                    {
                        title: 'Leonardo DiCaprio, Tom Berenger, Joseph Gordon-Levitt, Tom Hardy, Cillian Murphy, Elliot Page, and Ken Watanabe in Inception (2010)',
                        image: 'https://m.media-amazon.com/images/M/MV5BNjMxNjI1Mjc1OV5BMl5BanBnXkFtZTcwMDY0OTk1Mw@@._V1_Ratio1.5000_AL_.jpg'
                    },
                    {
                        title: 'Leonardo DiCaprio, Christopher Nolan, and Elliot Page in Inception (2010)',
                        image: 'https://m.media-amazon.com/images/M/MV5BMTk1NDM4MDMwMF5BMl5BanBnXkFtZTcwMjY0OTk1Mw@@._V1_Ratio1.5000_AL_.jpg'
                    },
                ]
            }
        }

        response.next(movie)

        return response
    }

}
