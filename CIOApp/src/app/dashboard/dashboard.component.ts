import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
 dataSource = {
      "chart": {
         "caption": "Recommended Portfolio Split",
         "subCaption": "For a net-worth of $1M",
         "showValues": "1",
         "showPercentInTooltip": "0",
         "numberPrefix": "$",
         "enableMultiSlicing": "1",
         "theme": "fusion"
      },
      "data": [{
         "label": "Equity",
         "value": "300000"
      }, {
         "label": "Debt",
         "value": "230000"
      }, {
         "label": "Bullion",
         "value": "180000"
      }, {
         "label": "Real-estate",
         "value": "270000"
      }, {
         "label": "Insurance",
         "value": "20000"
      }]
   }
  ngOnInit() {
  }

}
