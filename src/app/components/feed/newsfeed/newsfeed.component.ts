import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/service/newservice.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  constructor(private _services: NewserviceService) { }

  newsfeedDisplay: any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.newsfeedDisplay = result.articles
    })
  }

}
