import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from 'src/app/pages/home/home.component'
import { SearchComponent } from 'src/app/pages/search/search.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
