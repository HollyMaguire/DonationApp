import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // private _url: string = "http://127.0.0.1:8000/Users/"

//   constructor(private http: HttpClient){ }

  // getUserData(): Observable<User[]>{
  //   return this.http.get<User[]>(this._url)
  
  //  }
  //  errorHandler(error: HttpErrorResponse){
  //    return throwError(error.message || "Server Error")
//}
}


