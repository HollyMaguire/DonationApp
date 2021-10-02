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
  id: any;

  constructor(private userService: UserService) {
    
   }
  
  
  
  ngOnInit(): void {
 
  }
}