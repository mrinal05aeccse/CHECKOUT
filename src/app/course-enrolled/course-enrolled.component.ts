import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-course-enrolled',
  templateUrl: './course-enrolled.component.html',
  styleUrls: ['./course-enrolled.component.css']
})
export class CourseEnrolledComponent {
  constructor(private courseService:CourseService){}

  courses:{ id:number, name:string, author: string, duration: number, type: string, 
    price: number, ratings: number, image: string,
    description: string}[]=[];

  ngOnInit():void{
    this.courses=this.courseService.courses;
  }  
}
