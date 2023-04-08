import { Observable } from 'rxjs'
import { ResultMovie } from 'src/app/models/result-movie'
import { Movie } from 'src/app/models/movie'

export abstract class ImdbService {
    public abstract searchMovie(q: string): Observable<ResultMovie[]>
    public abstract title(id: string): Observable<Movie>
}
