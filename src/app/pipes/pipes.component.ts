import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  constructor(private router: Router) { }

  amount = 2230.45670001;
  channelName = "WebTechTalk";
  mark = 0.8945;
  today = new Date();
  name = "Surender kantan Neela  Patel";
}

