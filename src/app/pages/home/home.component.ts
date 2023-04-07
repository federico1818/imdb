import { Component } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    public onSearch(search: string): void {
        console.log(search)
    }
}
