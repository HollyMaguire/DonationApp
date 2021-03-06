import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthguardService } from '../auth.service';
import { RegisterUserService } from '../register-user.service';
import { ShareddataService } from '../shareddata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  register: any; 
  input: any;

  donations: any;

  invalidCredentialMsg: string | undefined;
  username: string | undefined;
  password: string | undefined;
  retUrl: string | null="users";
  
  constructor(private authService: AuthguardService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute,
              private registerUserService: RegisterUserService,
              private sharingService: ShareddataService) {}

  ngOnInit() {
    this.register = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role: ''
    };

    this.input = {
      username: '',
      password: '',
    }

  } 

  registerUser(){
    this.registerUserService.registerNewUser(this.register).subscribe(
      response => {
        console.log(response);
        alert('User ' + this.register.first_name + ' has been created!');
      },
      error => console.log('error', error)
    );
  }

  loginUser(){

    this.sharingService.setData(this.input.username)
    console.log(this.sharingService.getData());
    console.log("#################")


    this.registerUserService.loginUser(this.input).subscribe(
      response => {
        this.authService.login();
        this.router.navigate( [this.retUrl]);
        alert('You succesfully Loged in!')
      },
      
      error => {
        alert('Wrong Credentials!');
        this.router.navigate( ['login']);
      }
    
    );
  }



}
