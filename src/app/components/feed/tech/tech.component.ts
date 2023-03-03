import { Component, OnInit } from '@angular/core';
import { NewserviceService } from "src/app/service/newservice.service";

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor(private _services: NewserviceService) { }

  techDisplay: any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result) => {
      console.log(result);
      this.techDisplay = result.articles
    })
  }

}
