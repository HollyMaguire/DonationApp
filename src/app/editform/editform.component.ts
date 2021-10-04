import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  
  public formFill = new FormControl('');
  public userdata: any;
  public errorMsg: any;

  constructor(private userService: UserService) {   }

  @Input() dep:any;
  public id:string | undefined;
  public username: string | undefined;
  public first_name: string | undefined;
  public last_name: any;
  public email: any;
  public password: any;
  public role: any;
  
  ngOnInit(): void {
    this.id = this.dep.id;
    this.username = this.dep.username;
    this.first_name = this.dep.first_name;
    this.last_name = this.dep.last_name;
    this.email = this.dep.email;
    this.password = this.dep.password;
    this.role = this.dep.role;
   
  }

  AddUser(){
    var val = {id: this.id,
               username: this.username,
               first_name: this.first_name,
               last_name: this.last_name,
               email: this.email,
               password: this.password,
               role: this.role,
              };
    console.log(val)
    this.userService.addUser(val).subscribe(
      data => {
        alert(data.toString());
    });

  }

  UpdateUser(){
    var val = {id: this.id,
      username: this.username,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      role: this.role,
     };
    console.log(val)
    this.userService.updateUser(val).subscribe(
    data => {
    alert(data.toString());
    });
  }

}
