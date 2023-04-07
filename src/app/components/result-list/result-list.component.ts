import { Component, Input } from '@angular/core'
import { ResultMovie } from 'src/app/models/result-movie'

@Component({
    selector: 'app-result-list',
    templateUrl: './result-list.component.html',
    styleUrls: ['./result-list.component.scss']
})

export class ResultListComponent {
    @Input() results!: ResultMovie[]
}
