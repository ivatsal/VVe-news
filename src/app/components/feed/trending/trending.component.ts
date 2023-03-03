import { Component, OnInit } from '@angular/core';
import { NewserviceService } from 'src/app/service/newservice.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  constructor(private _services: NewserviceService) { }

  trendingDisplay: any = [];

  ngOnInit(): void {
    this._services.trendingNews().subscribe((result) => {
      console.log(result);
      this.trendingDisplay = result.articles
    })
  }
}
