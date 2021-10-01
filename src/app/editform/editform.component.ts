import { Component, OnInit } from '@angular/core';
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
  user_id: String | null;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.user_id = this.route.snapshot.paramMap.get("user_id")
   }
  
  
  
  ngOnInit(): void {
      this.user_id = this.route.snapshot.paramMap.get("user_id")
      this.userService.getUserData().subscribe(
       (data:any) => {this.userdata = data; console.log(data)},
       (error:any) => this.errorMsg = error,
       () => console.log("Completed"))
  }
  }
