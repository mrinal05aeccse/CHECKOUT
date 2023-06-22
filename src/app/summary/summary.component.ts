import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor(private courseService:CourseService, private router: Router){}

  courses:{ id:number, name:string, author: string, duration: number, type: string, 
    price: number, ratings: number, image: string,
    description: string}[]=[];

    sum:number=0; 
  ngOnInit():void{
    this.courses=this.courseService.courses;
    // this.courses.forEach((course) => {
    //   const price: number = course.price;
    //   // Do something with the price, such as printing it
    //   this.sum=this.sum+price;
    // });
    // this.courseService.total=this.sum;
    this.sum=this.courseService.getTotalSum();
  }
  ngDoCheck(){
    this.sum=this.courseService.getTotalSum();
  }
  GoToPayment(){
    this.router.navigateByUrl('Payment');
  }
}
