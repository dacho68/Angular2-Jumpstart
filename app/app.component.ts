// core fo angular2 . always need it
import {Component} from '@angular/core';

// import the components

import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

// this is new to Angular 2.0
@Component({
    // element selector my-app
    selector: 'my-app',
    
    template: `<h1>Hello Angular 2</h1>
              <courses></courses>
              <authors></authors>
              `,
    // including those 2 components
    directives:[CoursesComponent, AuthorsComponent]
})
export class AppComponent { }