import { Observable } from 'rxjs'
import { ResultMovie } from 'src/app/models/result-movie'

export abstract class ImdbService {
    public abstract searchMovie(q: string): Observable<ResultMovie[]>
}
