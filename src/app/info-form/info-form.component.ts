import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DonationService } from '../donation.service';
import { ShareddataService } from '../shareddata.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css'],
})
export class InfoFormComponent implements OnInit {

  public formFill = new FormControl('');
  donations:any;

 

  constructor(private donationService: DonationService, 
              private sharingService: ShareddataService) { }



  ngOnInit(): void {
    this.donations = this.sharingService.getData();
    console.log(this.donations);
    console.log("#################")
  
  }

  ngAfterViewInit(){

  }

  AddDonation(){

  }

}


