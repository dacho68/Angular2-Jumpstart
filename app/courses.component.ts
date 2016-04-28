
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
// import you directive
import {AutoGrowDirective} from './auto-grow.directive'


@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               {{title}}
               <input type ="text" autoGrow />
               <ul>
                 <li *ngFor="#course of courses">
                 {{course}}
                 </li>
                </ul>
              ` ,
    providers: [CourseService],  // Dependency Injection
    directives: [AutoGrowDirective] // include the directive
})

export class CoursesComponent{
    title: string = "The title of courses page"; // string is optional (it's simlar to the Pascal declaration)
    courses;
    
    // the CourseService instance will be injected into this class.
    constructor(courseService: CourseService){
         this.courses = courseService.getCourses();
    }
}