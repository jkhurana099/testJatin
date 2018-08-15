import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
status: boolean=true;
  constructor() { }
toggleSidebar(){
    this.status = !this.status;
    console.log("abc");
}
  ngOnInit() {
  
  
  }

}
