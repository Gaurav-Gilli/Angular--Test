import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }
  userData:any = [];
  ngOnInit() {
    this.dataService.getAllUsers().subscribe((allData)=>{
      console.log(allData);
      this.userData = allData;
    })
  }

}
