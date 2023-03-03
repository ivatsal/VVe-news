import { Component, OnInit } from '@angular/core';
import { NewserviceService } from "src/app/service/newservice.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private _services: NewserviceService) { }

  businessDisplay: any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result) => {
      console.log(result);
      this.businessDisplay = result.articles
    })
  }
}
