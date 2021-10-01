import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  // private isloggedIn: boolean;
  // private userName:string | undefined;
  // private role:boolean | undefined;
 
  // constructor() {
  //   this.isloggedIn=false;


    private isloggedIn: boolean;
    private role:string | undefined;
    private userName:string | undefined;
    
    constructor() {
      this.isloggedIn=false;
    }

    login(username: string, password:string) {
        this.isloggedIn=true;
        this.userName=username;
        return of(this.isloggedIn);
    }

    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
    



                    isAdminUser():boolean {
                      if (this.role=='admin') {
                          return true; 
                      }
                      return false;
                    }




    logoutUser(): void{
      this.isloggedIn = false;
    }

}
