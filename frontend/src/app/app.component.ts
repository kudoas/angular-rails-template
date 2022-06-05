import { Component } from '@angular/core';

import { DataService } from './data.service';

type Ping = {
  text: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Home';
  ping: Ping[] = [];

  constructor(private service: DataService) {}

  getPing(): void {
    this.service.getPing().subscribe((res: any) => {
      this.ping = res.data;
      console.log(this.ping);
    });
  }
}
