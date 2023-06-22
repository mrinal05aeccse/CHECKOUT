import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseEnrolledComponent } from './course-enrolled/course-enrolled.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { PaymentProcessingComponent } from './payment-processing/payment-processing.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';

const appRoutes:Routes=[
  {path:'',component:MyCartComponent},
  {path:'Payment',component: PaymentComponent},
  {path:'PaymentProcessing',component: PaymentProcessingComponent},
  {path:'PaymentSuccessfull', component: PaymentSuccessfulComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CourseEnrolledComponent,
    SummaryComponent,
    PaymentComponent,
    MyCartComponent,
    PaymentProcessingComponent,
    PaymentSuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
