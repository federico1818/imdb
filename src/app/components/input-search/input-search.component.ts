import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})

export class InputSearchComponent {
    @Output() search: EventEmitter<string> = new EventEmitter<string>()

    constructor(
        private _fb: FormBuilder
    ) {}

    public form: FormGroup = this._fb.group({
        search: ['', Validators.required]
    })

    public onSubmit(): void {
        if(this.form.valid) {
            this.search.emit(this.form.value.search)
        }
    }
}
