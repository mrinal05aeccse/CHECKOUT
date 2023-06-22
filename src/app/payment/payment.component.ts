import { Component } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private courseService:CourseService, private router: Router){}

  total_sum:number=0;
  ngOnInit():void{
    this.total_sum=this.courseService.total;
  }
  BackToMyCart(){
    this.router.navigateByUrl('');
  }
  GoToPaymentProcessing(){
    this.router.navigateByUrl('PaymentProcessing');
  }
}
