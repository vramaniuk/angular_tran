import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {HeroesComponent} from './heroes.component';

RouterModule.forRoot([
    {
        path: 'heroes',
        component: HeroesComponent
    }
])

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
}
