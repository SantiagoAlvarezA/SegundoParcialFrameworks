import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';

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
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }