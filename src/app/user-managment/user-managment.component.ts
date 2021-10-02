import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css'],
  providers: [UserService],
})
export class UserManagmentComponent implements OnInit {
    public userdata: any;
    public errorMsg: any;
    public singleuserdata: any;

    constructor(private userService: UserService) { }
  
  onEdit(): void {
    console.log("i was clicked")
  }

  ngOnInit(): void {
        this.userService.getUserData().subscribe(
         (data:any) => {this.userdata = data; console.log(data)},
         (error:any) => this.errorMsg = error,
         () => console.log("Completed"))
  }

  user_clicked = (id: any) => {
    this.userService.getUser(id).subscribe(
      (data:any) => {this.userdata = data; console.log(data)},
      (error:any) => this.errorMsg = error,
    )
  }
  
}  

