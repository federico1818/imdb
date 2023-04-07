import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})

export class InputSearchComponent implements OnInit {
    @Output() search: EventEmitter<string> = new EventEmitter<string>()
    @Input() q!: string

    public form: FormGroup = this._fb.group({
        search: ['', Validators.required]
    })

    constructor(
        private _fb: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.form.patchValue({
            search: this.q
        })
    }

    public onSubmit(): void {
        if(this.form.valid) {
            this.search.emit(this.form.value.search)
        }
    }
}
