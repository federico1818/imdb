import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { filter, switchMap } from 'rxjs'
import { Movie } from 'src/app/models/movie'
import { ImdbService } from 'src/app/services/imdb.service'

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
    public movie!: Movie

    constructor(
        private _route: ActivatedRoute,
        private _imdbService: ImdbService
    ) {}

    public ngOnInit(): void {
        this._route.paramMap.pipe(
            filter((params: ParamMap) => {
                return !!params.get('id')
            }),
            switchMap((params: ParamMap) => {
                return this._imdbService.title(params.get('id')!)
            })
        ).subscribe((movie: Movie) => {
            console.log(movie)
            this.movie = movie
        })
    }

    public get background(): string {
        return `url('${ this.movie.images.items[0].image }')`
    }
}
