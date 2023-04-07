import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { filter } from 'rxjs'
import { ResultMovie } from 'src/app/models/result-movie'
import { ImdbService } from 'src/app/services/imdb.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
    public results!: ResultMovie[]
    public q!: string

    constructor(
        private _route: ActivatedRoute,
        private _imdbService: ImdbService
    ) {}

    public ngOnInit(): void {
        this._route.queryParams
        .pipe(
            filter((params: Params) => {
                return !!params['q']
            })
        ).subscribe((params: Params) => {
            this.q = params['q']
            this.search(this.q)
        })
    }

    public onSearch(q: string): void {
        this.search(q)
    }

    private search(q: string): void {
        this._imdbService.searchMovie(q)
        .subscribe((movies: ResultMovie[]) => {
            this.results = movies
        })
    }
}
