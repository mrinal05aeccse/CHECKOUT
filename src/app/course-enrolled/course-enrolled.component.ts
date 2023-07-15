import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-enrolled',
  templateUrl: './course-enrolled.component.html',
  styleUrls: ['./course-enrolled.component.css']
})
export class CourseEnrolledComponent {
  constructor(private courseService:CourseService, private router: Router){}

  courses:{ id:number, name:string, author: string, duration: number, type: string, 
    price: number, ratings: number, image: string,
    description: string}[]=[];

    course_id:number;
   
  ngOnInit():void{
    this.courses=this.courseService.courses;
  }
  
  OnClickRemove(id:number){
    this.course_id=id;
    this.courseService.DeleteCourse(this.course_id);
  }

  OnClickGoToSummaryPage(id:number){
    this.router.navigate(['SummaryPage',id]);
  }
}
