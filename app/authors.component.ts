
import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({
    selector: 'authors',
    template: `<h2>Authors</h2>
               {{title}}
               <ul>
                 <li *ngFor="#author of authors">
                 {{author}}
                 </li>
                </ul>
              ` ,
    providers: [CourseService]
})
export class AuthorsComponent{
    title: string = "The title of authors page";
    authors: string[];
    
    constructor(courseService: CourseService){
         this.authors = courseService.getAuthors();
    }
}