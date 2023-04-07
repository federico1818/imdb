import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from 'src/app/material/material.module'
import { SearchComponent } from './pages/search/search.component'
import { InputSearchComponent } from './components/input-search/input-search.component'
import { ResultComponent } from './components/result/result.component'
import { ResultListComponent } from './components/result-list/result-list.component'
import { TitleComponent } from './pages/title/title.component'
import { ImdbService } from './services/imdb.service'
import { ImdbMockService } from './services/imdb-mock.service';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        InputSearchComponent,
        ResultComponent,
        ResultListComponent,
        TitleComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [
        {
            provide: ImdbService,
            useClass: ImdbMockService
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
