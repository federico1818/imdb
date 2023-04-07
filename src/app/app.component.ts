import { Component } from '@angular/core'
import { ImdbService } from 'src/app/services/imdb.service'
import { ResultMovie } from './models/result-movie'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
