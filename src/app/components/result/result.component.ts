import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/result';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent {
    @Input() result!: Result
}
