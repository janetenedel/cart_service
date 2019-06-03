import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {


}
