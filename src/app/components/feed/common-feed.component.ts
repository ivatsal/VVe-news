import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-feed',
  templateUrl: './common-feed.component.html',
  styleUrls: ['./common-feed.component.scss']
})
export class CommonFeedComponent {
  @Input() newsDisplay: any = [];
}
