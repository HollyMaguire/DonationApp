import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
    public userdata: any;
    public errorMsg: any;
    constructor(private userService: UserService) { }
  


  ngOnInit(): void {
        //    this.userService.getuserData().subscribe(
    //      (data:any) => {this.userdata = data; console.log(data)},
    //      (error:any) => this.errorMsg = error,
    //      () => console.log("Completed")
    // )
    //    }
  }


}
