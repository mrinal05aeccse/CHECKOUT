import { Component } from '@angular/core';
import { CourseService } from './Services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CourseService]
})
export class AppComponent {

  constructor(private courseService:CourseService){}

  title = 'CHECKOUT';
}
