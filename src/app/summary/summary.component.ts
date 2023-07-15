import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListService } from '../Services/courseList.service';
import { Course } from '../course';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [CourseListService]
})
export class SummaryComponent {

  id:number; 
  price:number;

  constructor(private courseListService:CourseListService, private router: Router,private route:ActivatedRoute){ }

  course: Course | undefined;

  
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    const courses = this.courseListService.getCourses();
    this.course = courses.find(course => course.id == this.id);
    this.price=this.courseListService.getCoursePriceById(this.id);
   
  }
  // ngDoCheck(){
  //   this.sum=this.courseService.getTotalSum();
  // }
  GoToPayment(id:number){
    this.router.navigate(['Payment',id]);
  }
  BackToMyCart(){
    this.router.navigateByUrl('');
  }
}
