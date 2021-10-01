import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  public formFill = new FormControl('');
  public userdata: any;
  public errorMsg: any;
  constructor(private userService: UserService) { }
  
  
  
  ngOnInit(): void {
      this.userService.getUserData().subscribe(
       (data:any) => {this.userdata = data; console.log(data)},
       (error:any) => this.errorMsg = error,
       () => console.log("Completed"))
  }
  }
