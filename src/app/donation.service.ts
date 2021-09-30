import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IDonation } from './donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
//  private _url: string = "ourAPI"

//   constructor(private http: HttpClient){ }

  // getDonationData(): Observable<IDonation[]>{
  //   return this.http.get<IDonation[]>(this._url)
  
  //  }
  //  errorHandler(error: HttpErrorResponse){
  //    return throwError(error.message || "Server Error")
//}
}