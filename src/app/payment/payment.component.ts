import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CourseListService } from '../Services/courseList.service';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [CourseListService]
})
export class PaymentComponent implements OnInit {

  pay:Payment=new Payment();
  constructor(private courseListService:CourseListService, private router: Router,private route:ActivatedRoute,private paymentService:PaymentService){}

  course_id:number;
  total_sum:number=0;


  ngOnInit():void{
    this.course_id=this.route.snapshot.params['id'];
    this.total_sum=this.courseListService.getCoursePriceById(this.course_id);
    this.pay.amount=this.total_sum;
    this.pay.courseId=this.course_id;
    this.pay.date=new Date();
  }


  BackToMyCart(){
    this.router.navigateByUrl('');
  }

  @ViewChild('myForm')form:NgForm;


  savePayment(){
    this.paymentService.makePayment(this.pay).subscribe(data => {
      console.log(data);
      this.GoToPaymentProcessing();
    },
    error => console.log(error));

    
  }
   
  GoToPaymentProcessing(){
    this.router.navigateByUrl('PaymentProcessing');
  }
  
  OnSubmit(){
    // console.log(this.form);
    this.savePayment();
    
  }
}
