import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from 'src/app/pages/home/home.component'
import { SearchComponent } from 'src/app/pages/search/search.component'
import { TitleComponent } from 'src/app/pages/title/title.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'title/:id',
        component: TitleComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
