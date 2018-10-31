import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { ListCountiesService } from './services/list-counties.service';

const appRoutes:Routes = [
    {path: '', component: HomeComponent},
    {path: 'listCountries', component: ListCountriesComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListCountriesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        ListCountiesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }