import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { filter } from 'rxjs'

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this._route.paramMap
        .pipe(
            filter((params: ParamMap) => {
                return !!params.get('id')
            })
        )
        .subscribe((params: ParamMap) => {
            console.log(params.get('id'))
        })
    }
}
