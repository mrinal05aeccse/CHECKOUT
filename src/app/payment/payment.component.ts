import { Component, ViewChild } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private courseService:CourseService, private router: Router){}

  total_sum:number=0;
  ngOnInit():void{
    this.total_sum=this.courseService.getTotalSum();
  }
  BackToMyCart(){
    this.router.navigateByUrl('');
  }

  @ViewChild('myForm')form:NgForm;

  GoToPaymentProcessing(){
    console.log(this.form);
    this.router.navigateByUrl('PaymentProcessing');
  }
}
