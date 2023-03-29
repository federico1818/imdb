import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from 'src/app/material/material.module'
import { SearchComponent } from './pages/search/search.component'
import { InputSearchComponent } from './components/input-search/input-search.component'

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        InputSearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
