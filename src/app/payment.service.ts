import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Payment } from "./payment";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class PaymentService {

    private baseUrl:string;

    constructor(private httpClient: HttpClient) {
        this.baseUrl="http://localhost:8091/payment";
    }


    public makePayment(payment:Payment):Observable<any>{
        return this.httpClient.post(`${this.baseUrl}`,payment);
    }

    public getPaymentList(): Observable<Payment[]>{
        return this.httpClient.get<Payment[]>(`${this.baseUrl}`);
    }

    
}
  