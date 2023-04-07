import { Component } from '@angular/core'
import { ResultMovie } from 'src/app/models/result-movie'
import { ImdbService } from 'src/app/services/imdb.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent {
    public results!: ResultMovie[]

    constructor(
        private _imdbService: ImdbService
    ) {}

    public onSearch(search: string): void {
        this._imdbService.searchMovie(search)
            .subscribe((movies: ResultMovie[]) => {
                this.results = movies
            })
    }
}
