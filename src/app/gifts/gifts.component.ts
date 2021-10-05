import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MakeDonationService } from '../make-donation.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {
  giftFill = new FormControl('');
    public makeDonationData: any;
    public errorMsg: any;
    constructor(private dataService: MakeDonationService) { }
  
    ngOnInit(): void {
      this.dataService.getDonationType().subscribe(
        (data:any) => {this.makeDonationData = data; console.log(data)},
        (error:any) => this.errorMsg = error,
        () => console.log("Completed"))
    }
  }