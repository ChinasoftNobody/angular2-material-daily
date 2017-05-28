import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    {name: 'card1'},
    {name: 'card2'},
    {name: 'card3'},
    {name: 'card4'},
    {name: 'card5'},
    {name: 'card6'},
    {name: 'card7'},
    {name: 'card8'},
    {name: 'card9'}
  ];
}
